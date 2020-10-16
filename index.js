const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please describe what the project is about.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation requirements and instructions?",
        name: "installation"
    },
    {
        type: "input",
        message: "Please explain how the project will be used.",
        name: "usage"
    },
    {
        type: "list",
        message: "Please choose a license for this project.",
        name: "license",
        choices: [
            "Apache 2.0", 
            "Boost 1.0", 
            "GNU GPL v3", 
            "MIT", 
            "Mozilla 2.0",
            "Other"
        ]
    },
    {
        type: "input",
        message: "What are the guidelines for contributing?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please provide the instructions for tests.",
        name: "tests"
    },

];

// console.log(questions);

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
