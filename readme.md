# ITCS NBAD 5166 - Assignment Week 08
# Sohan Birajdar - 801298151

# Assignment Instructions: 

This assignment will be divided into two parts:

# Part 1: How to interact with MongoDB using the command line: 
In this part, you are required to install MongoDB on your system and make sure that you are able to access the database shell. After this, you are required to perform the following operations. 

1. Create a new database
2. Create a new collection 
3. Show the created collections in the database 
4. Insert a new document into the collection
5. List all documents in a specific collection

Deliverables: 
1. One screenshot that shows you performed the mentioned tasks. 

# Part 2: Fetching data from MongoDB in Nodejs: 
In coding exercise 01 ($WIKI_REFERENCE$/pages/instructions-for-coding-exercise-01) you built an express server where your data was hard coded in a JSON-formatted file. You are required to change your server to read the data from MongoDB database instead. While you are doing this make sure to include the following: 

1. Make sure that your personal budget website is working and the data used for both charts is fetched from the database. 
2. You are required to implement an additional endpoint in your server to update the entries that you will show in your charts. The total number of endpoints are two. The first one is used to fetch the data from your database. The other one should be to add the functionality of adding new data.
3. You don’t need to have a specific webpage where you can add documents but you are required to test it using Postman.
4. You are required to use mongoose to interact with your database.
5. You have to build a schema model to include the following data (title, related value, color). In other words, you are not supposed  to have any chart data-related hard coded. 
6. The color field must be enforced to be in the at least 6 digits (hexadecimal format. (eg: #ED4523)). In addition, all fields are required.
7. Your code must be pushed to your Github account. 

Deliverables:
1. A screenshot from Postman of your testing of the add document endpoint. 
2. Github repository link. 
