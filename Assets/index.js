const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a project description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "licence",
        message: "what licence is being used?"
    },
    {
        type: "input",
        name: "contributers",
        message: "who contributed to this project?"
    },
    {
        type: "input",
        name: "Software",
        message: "What software is being used?"
    },
    {
        type: "input",
        name: "GitHub",
        message: "Enter your GitHub link here"
    },
    {
        type: "input",
        name: "Site",
        message: "Enter your website link here"
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
