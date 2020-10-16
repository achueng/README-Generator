const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Hello! What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the project about?",
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
        message: "What are the instructions for tests?",
        name: "tests"
    },

];

// console.log(questions);

// function to return string to add to README
// License badges from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function getBadge(license){
    switch (license) {
        case "Apache 2.0":
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case "Boost 1.0":
            return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            break;
        case "GNU GPL v3":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            break;
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case "Mozilla 2.0":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            break;
        default:
            break;
    };
}


// function to write README file, need to require built in fs
function writeToFile(fileName, data) {
    // use fs.writeFile() to write file --> README.md
    fs.writeFile(fileName, generateMarkdown(data), function(error){
        if (error) {
            throw error;
        }
        console.log("Your input has been written to the README.md file successfully.");
    });
    // generateMarkdown(data);
}

// function to initialize program
function init() {
    // ask inquirer stuff -> use inquirer.prompt(questions).then(data)
    inquirer
    .prompt(questions)
    .then(function(data) {
        // console.log(data); // yields object
        // call getBadge function to add badge to markdown file
        licenseBadge = getBadge(data.license);
        // call function writeToFile(fileName, data);
        writeToFile("README.md", data);
        // fileName will be README.md, data will reference the response from asking inquirer stuff
    });

}

// function call to initialize program
init();
