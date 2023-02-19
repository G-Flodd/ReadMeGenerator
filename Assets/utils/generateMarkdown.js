// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ##Table of Contents 
  1. [Title](#Title)
  2. [Usage](#Usage)
  3. [Description](#Description)
  4. [Installation](#Installation)
  5. [Licence](#Licence)
  6. [Contributers](#Contributers)
  7. [Software(#Software)
  8. [UserQuestions](#UserQuestions)
  9. [Contributers](#Contributers)
  10. [Contact for Questions](#Questions)

  ## Installation
  ${answers.installation}

  ## Licence 
  ${answers.licence}

  ## Usage
  ${answers.usage}

  ## Contributers
  ${answers.contributers}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.questions}`

;
}

module.exports = generateMarkdown;