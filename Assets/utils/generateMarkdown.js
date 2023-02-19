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
  9. [GitHub](#GitHub)
  10. [Website](#Site)

  ## Title
  ${answers.title}

  ## Usage 
  ${answers.licence}

  ## Description
  ${answers.usage}

  ## Installation
  ${answers.installation}

  ## Licence
  ${answers.licence}
  
  ## Contributers 
  ${answers.contributers}

  ## Software)
  ${answers.usage}

  ## UserQuestions
  ${answers.userQuestions}

  ## GitHub
  ${answers.github}

  ## Website
  ${answers.site}`

;
}

module.exports = generateMarkdown;