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
        name: "usage",
        message: "Enter instruction on usage:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "list",
        name: "licence",
        message: "What licence are you using?",
        choices: ["None","MIT","Apache","Mozilla", "GNU"],
    },
    {
        type: "input",
        name: "contributers",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Were any tests done on your project"
    },
    {
        type: "input",
        name: "site",
        message: "Enter your website link here"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub link here"
    },
    {
        type: "input",
        name: "userquestions",
        message: "Where should people contact you for questions?"
    }

];

const promptUser = (questions) => {
    inquirer.prompt(questions)
        .then((answers) => {
            new_answers = mitBadge(answers);
            console.log(new_answers);

            const mdContent = generateMarkdown(answers);
            writeToFile('README.md', mdContent);

        })
}

function mitBadge (promptAnswers){
    console.log("chosen=" + promptAnswers.licence)
    if(promptAnswers.licence === "None"){
        promptAnswers.licence = ""
        promptAnswers.licenceMsg = "The application is not covered under a licence"
    }
    else if(promptAnswers.licence === "MIT"){
        promptAnswers.licence = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        promptAnswers.licenceMsg = "The application is covered under the MIT Licence"
    }
    else if(promptAnswers.licence === "Apache"){
        promptAnswers.licence = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        promptAnswers.licenceMsg = "The application is covered under the Apache Licence"
    }
    else if(promptAnswers.licence === "Mozilla"){
        promptAnswers.licence = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        promptAnswers.licenceMsg = "The application is covered under the Mozilla Licence"
    }
    else if(promptAnswers.licence === "GNU"){
        promptAnswers.licence = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        promptAnswers.licenceMsg = "The application is covered under the GNU Licence"
    }
    return promptAnswers
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