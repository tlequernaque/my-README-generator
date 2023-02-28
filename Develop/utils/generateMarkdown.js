// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`project = ${data.project}`)
  return `# ${data.project}
  # ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.know}

  ## License
  ${data.license}

  ## Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you liked this project feel free to check out my other projects at GitHub,  GitHub username: ${data.GitHub}.
  If you have any questions feel free to email me at  ${data.email}.
`;
}

module.exports = generateMarkdown;
