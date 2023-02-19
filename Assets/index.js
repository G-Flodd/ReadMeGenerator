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
        name: "usage",
        message: "Enter instruction on usage:"
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
        name: "userQuestions",
        message: "Enter an email address for questions:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub link here"
    },
    {
        type: "input",
        name: "site",
        message: "Enter your website link here"
    }

];

const promptUser = (questions) => {
    inquirer.prompt(questions)
        .then((answers) => {

            const mdContent = generateMarkdown(answers);
            writeToFile('README.md', mdContent);

        })
}

// function to write README file
function writeToFile(fileName, data) {
    //fs.writeFileSync('ReadMe.md')
    console.log(process.cwd());
    fs.writeFile(path.join(process.cwd() + "/dist/" + fileName), data, (err) => err && console.error(err))
}
// function to initialize program
function init() {

    promptUser(questions)

}

// function call to initialize program
init();