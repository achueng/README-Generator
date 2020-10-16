// function to generate markdown for README
// returns format & general content
function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

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

  Please visit https://github.com/${data.github} to learn more about this project and the developer.
  
  If there are any question, issues, or concerns, please contact ${data.name} via email at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
