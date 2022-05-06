// function to layout how the readme will be structured when created
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
  ${contributing}

  ### Questions
  ----------------
  ### Github: [${name}](https://github.com/${github})
  #### Email: ${email}
`;
}

// exports createMarkdown.js so the index can use it to create readme
module.exports = readMeLayout; 