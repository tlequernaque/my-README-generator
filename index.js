const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'project',
        message: 'What is your projects name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [ 
            'MIT',
            'AGPLv3', 
            'GPLv3', 
            'None'
        ]
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'know',
        message: 'What does the user need to know about using your repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

const init = (questions) => {
    inquirer.prompt(questions) .then((response) => {
        console.log(response);
        const mdPageContent = generateMarkdown(response);
        console.log(mdPageContent);
        writeToFile ('myREADME1.md', mdPageContent)
    })
};

init(questions);