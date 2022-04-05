// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (licenses) {

    let ans = ""

    if (licenses.licenses) {

    for (var i = 0; i < licenses.licenses.length; i++) {
      
            ans += `![badge](https://img.shields.io/badge/license-${licenses.licenses[i]}-brightgreen)`

        }
    } return ans
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(answers) {
//     if (answers.license) {
//         return ``
//     } else {
//         return "";
//     }
// }

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
    if (answers) {
        return renderLicenseBadge();
    } else {
        return "";
    }
};

// TODO: Create a function to generate markdown for README
function generateReadme (answers) {
    console.log(answers);

  return `
  
  # ${answers.title}

  ## Description:
  ${answers.description}

  ## Table of Contents: 
  - [Description] (#description)
  - [Instructions] (#instructions)
  - [Guidelines] (#guidelines)
  - [Tests] (#test)
  - [Licenses] (#licenses)
  - [GitHub] (#github)
  - [E-Mail] (#email)

  ### Instructions:
  ${answers.instructions}

  ### Guidelines:
  ${answers.guidelines}

  ### Test Instructions:
  ${answers.test}

  ### Licenses:
  ${renderLicenseBadge(answers)}


  ### GitHub:
  https://github.com/${answers.github}

  ### E-mail:
  Please feel free to e-mail me at: ${answers.email} if you have any questions!

`;
}


 module.exports = generateReadme;