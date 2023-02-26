// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [ 'MIT', new inquirer.Separator(), 'AGPLv3', new inquirer.Separator(), 'GPLv3', new inquirer.Separator()],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'GitHub',
//       message: 'What is your GitHub username?',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What is your email address?',
//     },
//     {
//       type: 'input',
//       name: 'project',
//       message: 'What is your projects name?',
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Please write a short description of your project?',
//     },
//     {
//       type: 'input',
//       name: 'license',
//       message: 'What kind of license should your project have?',
//     },
//     {
//       type: 'input',
//       name: 'command',
//       message: 'What command should be run to install dependencies?',
//     },
//     {
//       type: 'input',
//       name: 'tests',
//       message: 'What command should be run to run tests?',
//     },
//     {
//       type: 'input',
//       name: 'know',
//       message: 'What does the user need to know about using your repo?',
//     },
//     {
//       type: 'input',
//       name: 'contributing',
//       message: 'What does the user need to know about contributing to the repo?',
//     },
//   ])
//   .then((answers) => {
//     const mdPageContent = generateMarkdown(answers);

//     fs.writeFile('README.md', mdPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created a README.md file')
//     );
//   });