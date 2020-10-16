// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ## Table of Contents
    1. Installation
    2. Usage
    3. License
    4. Contributing
    5. Tests
    6. Questions

  ## Installation

  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions



`;
}

module.exports = generateMarkdown;
