const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file, need to require built in fs
function writeToFile(fileName, data) {
    // something to do with file --> README.md
    generateMarkdown(data);
}

// function to initialize program
function init() {
    // ask inquirer stuff -> use inquirer.prompt(questions).then(data)
    // call function writeToFile(fileName, data);
        // fileName will be README.md, data will reference the response from asking inquirer stuff


}

// function call to initialize program
init();
