# 343-final-project
Recipe Sharing Platform

Description

The Recipe Sharing Platform is a full-stack web application designed to make it easy for users to browse, share, and save recipes.

Motivation: The project was created to offer a community-driven space for food enthusiasts to share and explore recipes, making cooking more accessible and fun.

Why Build This: For my final project lol

Problem Solved: It provides a centralized platform for users to store, share, and analyze recipes, saving time and offering inspiration for meals.

What I Learned: Developing this project enhanced my skills in React, Express, MongoDB, and working with APIs. It also taught me about deployment and project documentation.

Table of Contents

Installation

Usage

Credits

License

Badges

Features

How to Contribute

Installation

Prerequisites

Node.js installed

MongoDB Atlas account

Edamam API credentials

Steps

Clone the repository:

git clone https://github.com/your-repo/recipe-sharing-platform.git
cd recipe-sharing-platform

Set up the backend:

cd server
npm install

Create a .env file with the following:

MONGO_URI=your-mongodb-uri
EDAMAM_APP_ID=your-app-id
EDAMAM_APP_KEY=your-app-key

Start the server:

node server.js

Set up the frontend:

cd ../client
npm install
npm run dev

Access the application:

Frontend: http://localhost:5173

Backend: http://localhost:5000

Usage

Open the application in your browser.

Browse through the list of recipes on the homepage.

Use the form to add new recipes.

Explore nutritional information by leveraging the external API.

Screenshots

Add screenshots here (e.g., homepage, recipe form, recipe details):

![Homepage](assets/images/homepage.png)
![Add Recipe](assets/images/add-recipe.png)
