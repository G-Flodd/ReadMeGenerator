// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ##Table of Contents 
  1. [Usage](#Usage)
  2. [Installation](#Installation)
  3. [Licence](#Licence)
  4. [Contributers](#Contributers)
  5. [Tests](#Tests)
  6. [UserQuestions](#UserQuestions)

  ## Usage
  ${answers.usage}

  ## Installation 
  ${answers.installation}

  ## License
  ${answers.licence}

  ## Contributers
  ${answers.contributers}

  ## Tests
  ${answers.tests}

  ## Website Link
  ${answers.websitelink}
  
  ## Questions
  [GitHub](https://github.com/${answers.github})

  [Email](mailto:${answers.questions})

    `;
}

module.exports = generateMarkdown;