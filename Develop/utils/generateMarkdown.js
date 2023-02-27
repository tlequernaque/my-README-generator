// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
  # ${data.project}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#How to Contribute)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.know}

  ## License
  ${data.license}

  ## How to Contribute 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you liked this project feel free to check out my other projects at ${data.Github}
  If you have any questions feel free to email me at  ${data.email}
`;
}

module.exports = generateMarkdown;
