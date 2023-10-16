const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json()); 
app.use('/', express.static('public')); 

mongoose.connect('mongodb://localhost:27017/MyChartData', { useNewUrlParser: true, useUnifiedTopology: true });

const budgetItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  budget: { type: Number, required: true },
  color: { type: String, required: true, minlength: 7, maxlength: 7 }
});

const budgetSchema = new mongoose.Schema({
  myBudget: [budgetItemSchema]
});

const Budget = mongoose.model('Budget', budgetSchema, 'Budget');


app.get('/budget', async (req, res) => {
  try {
    console.log('Data is Loaded');
    const budget = await Budget.findOne(); 
    
    if (!budget) {
      console.error('No  data found');
      return res.status(404).send('No data found');
    }
    
    res.status(200).send(budget);
  } catch (err) {
    console.error('Error fetching data ', err);
    res.status(500).send('Error fetching data ');
  }
});


app.post('/add_field', async (req, res) => {
  try {
    const { title, budget, color } = req.body;

    const newBudgetItem =
     { 
      title, 
      budget, 
      color };

    const result = await Budget.findOneAndUpdate(
      { _id: '652c85ae288301abb4367446' },
      { $push: { myBudget: newBudgetItem } },
      { new: true, upsert: true }
    );

    if (!result) {
      return res.status(404).send('Field not found.');
    }

    res.status(201).send({ _id: result._id, added: newBudgetItem });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
