// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  1. Installation
  2. Usage
  3. License
  4. Contributing
  5. Tests
  6. Questions

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Please visit https://github.com/${data.github} to learn more about this project and the developer. \n
  If there are any question, issues, or concerns, please contact ${data.name} via email at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
