# Quick Quotes

Simple webapp to allow users to create quotes for jobs. Built with *Flask*, *ReactJS* and *Postgres*

The project is split into two folders
1. public
2. server

### Public
This folder contains all the code for the Frontend of the website, which is using React and scss. If you choose to fork and work on the project, cd into the public folder and then you'll need to run `npm install` to install all the required packages. Next run `npm run watch` to build the js and css bundles.

### Server
This folder contains (/ will contain) all the python code for the Flask setup, database querys and api endpoints. I recommend setting up a virtual environment, inside this folder, and installing all the python packages. I will regularly run `pip freeze > requirements.txt` to generate a list of all the packages used. After the packages are downloaded, you'll need to set up Postgresql and create all the required tables. Here is a quick [video](https://www.youtube.com/watch?v=PJK950Gp780) about that. To run the server, cd into the server folder and run `python server.py`. 