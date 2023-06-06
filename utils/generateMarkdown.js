function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`;
    }
return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the ${license} license.`;
    }
return '';
}

function generateMarkdown(data) {
  console.log(`project = ${data.project}`)
  return `# ${data.project}
  # ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
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
  ${renderLicenseSection(data.license)}

  ## Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you liked this project feel free to check out my other projects at GitHub, using my GitHub username: ${data.GitHub}.
  If you have any questions feel free to email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
