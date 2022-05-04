// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const readMeLayout = data => {
  const { title, description, usage, installation, license, contributing, name, github, email } = data;
  return `
  # ${title}
  -------------------

  ## Table of Contents  
  ----------------------
  - [Description](#description) 
  - [Usage](#usage)  
  - [Installation](#installation)  
  - [License](#license)  
  - [Contributing](#contributing)  
  - [Questions](#questions)  
    

  ### Description  
  -------------------
  ${description}

  ### Usage  
  ------------
  ${usage}
 
  ### Installation  
  -------------------
  ${installation}

  ### License
  --------------
  ![${license}](https://img.shields.io/badge/license-${license}-blue)

  ### Contributing 
  ------------------

  ### Contact Information
  -------------------------
  ### Github: [${name}](https://github.com/${github})
  #### Email: ${email}
`;
}

module.exports = readMeLayout; 