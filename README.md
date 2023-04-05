# social-media-api

## Table of Contents:
- [Description](#description)
- [Usage](#usage)
- [Questions](#questions)
- [Credits](#credits)

## Description

This is an operational server back end built for a social media website. It does not have a front end at this time. It utilizes MongoDB, Mongoose, and express.

## Usage

You can view a video of the app in use [here](https://drive.google.com/file/d/1lBd-9h2sQc7O-HI2O4rx4y0RHTqs11Pv/view)

To use this app, you will first need to download the repository to your local machine.\
Then use 'npm i' in your console to initialize the node modules required.\
As long as you have MongoDB installed on your local machine and it has the necessary permissions, you should not need to input any credentials.\
The database is linked to get, put, post, and delete requests that you can view in the files contained in the 'routes' folder and the 'controllers' folder.\
Make sure you understand what those requests are asking for before you write a front end interaction for them!\
Additionally, you can create and seed the database by inputting node utils/seed.js in your terminal. I got the code used to seed from another member of the Columbia University Full Stack Dev Bootcamp. You can find his repository at the bottom of this document in the [Credits](#credits) section.\
Install insomnia to your local machine and try out all the routes to interact with the database. You can watch the video linked above if you'd like more information as to what using insomnia looks like.

## Questions

GitHub: [Smulchman](https://github.com/Smulchman)\
You can reach me at the following email with any questions regarding this repository:\
Email: Mulcahy.Samuel@gmail.com

## Credits
Created by Sam Mulcahy
I consulted the websites linked below for guidance:\
https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax - this is where I got the regex to check if a string was an email. \
https://github.com/moviefan322/snapi - This was where I took the code I used to seed my database with from. \