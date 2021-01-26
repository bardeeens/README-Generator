const generate = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please give a brief description of the program.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How is this programmed installed?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How is this program used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who are the contributors?',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'Are there any tests for ensuring that it is working?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What the repository url?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'list',
      message: 'Which license would you like to use?',
      choices: ["WTFPL", "Unlicense"],
      name: 'license',
    },
  ])
  
 
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
    .then((response) =>    
      {
     
        let licenseURL = ``
        console.log(response.license);
        // console.log(license === "WTFPL");
        switch (response.license) {
            case "WTFPL":
            licenseURL = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
            console.log("wtfbro");  
                break;
            case "Unlicense":
            licenseURL = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
            console.log("Unlicense my bro");
                break;
            default:
                console.log("didn't work");
        }

            // console.log(license);


      let README = `# **${response.title}** \n## Description:\n${response.description} \nTable of Contents: \n* Installation \n* Usage \n* License \n* Contributors \n* Tests \n* Questions

      ### Installation \n${response.installation} \n### Usage \n${response.usage} \n### License \n### Contributors \n${response.contributors} \n
      ### Tests \n${response.tests} \n### Questions? \n You can find the github repository here: \n${response.github} \n Feel free to contact me at ${response.email} if you have any questions or comments!
    
      
      
      `
      
      fs.writeFile("README1.md", README, (error) => {
        if (error){
          console.log(error);
        } else {
            console.log("README successfully generated!");
        }
      })
      }
  );

  function init(){
      generate.generateMarkdown();
  }
  init();