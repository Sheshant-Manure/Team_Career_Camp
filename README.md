# Team Career Camp
A web application for Team Career Camp for managing student's web development career, interviews, etc. It is basically a web UI for entering student data via forms and generating/downloading reports (CSV format).

Prerequisite-
    Install NodeJS on your PC/Laptop before working on this project on your local system.

Initial Setup:

1. Create a folder (Team_Career_Camp) and open it in VS Code. Inside it create the first file named index.js which will work as the entry point to our application.
2. Open a new terminal and run the npm command: npm init
3. Enter the details. Use the following for reference:
    
    package name: (team_career_camp)
    version: (1.0.0)
    description: A web application for Team Career Camp for managing student's web development career, interviews, etc. It is basically a web UI for entering student data via forms and generating/downloading reports (CSV format).
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author: Sheshant Manure
    license: (ISC) 

4. Now, create a new GitHub repository and name it as Team_Career_Camp.
5. Run the following command in VS Code's terminal to create a README.md file: echo "# Team_Career_Camp" >> README.md

Useful Git Commands:

    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin git@github.com:Sheshant-Manure/Team_Career_Camp.git
    git push -u origin main

Installing required npm packages:

    npm install express
    npm install ejs
    express-ejs-layouts
    npm install mongoose --save
    npm install express-session
    npm install json2csv

Open the package.json file and lookup for "scripts". Inside it, add the line: "start": "nodemon index.js". Make sure you also install nodemon in your project. To install nodemon globally run the command in terminal: npm install -g nodemon. Whenever you wish to start the app, open the terminal and run the command: npm start. This will automatically run the start script i.e nodemon index.js.

Create a file named .gitignore and add the line: node_modules/ to it. This will ensure that the node_modules folder is not pushed to Github repository.

Run the following command: mkdir Models, Views, Controllers, Assets in order to create folder structure of our app.