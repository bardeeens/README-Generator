const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
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
  ];

inquirer
  .prompt(questions)
    .then((response) =>    
      {
        let licenseURL = ``
        let licensestatement = ``
        console.log(response.license);
        switch (response.license) {
            case "WTFPL":
            licenseURL = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
            licensestatement =         
    ` DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
    Version 2, December 2004

    Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

    Everyone is permitted to copy and distribute verbatim or modified
    copies of this license document, and changing it is allowed as long
    as the name is changed.

    DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

    0. You just DO WHAT THE FUCK YOU WANT TO.`  
                break;
            case "Unlicense":
            licenseURL = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
            licensestatement =
    ` This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.
    
    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    
    For more information, please refer to <http://unlicense.org/>`
                break;
            default:
        }

      let README = 
`# **${response.title}** \n${licenseURL} \n## Description:\n${response.description} \n  ## Table of Contents: \n* Installation 
\n* Usage \n* Contributors \n* Tests \n* Questions \n* License \n## Installation \n${response.installation} \n## Usage \n${response.usage} 
\n## License \n## Contributors \n${response.contributors} \n## Tests \n${response.tests} \n## Questions? 
\n You can find the github repository here: \n${response.github} \n Feel free to contact me at ${response.email} with any questions or comments! 
\n## Licensing \n   ${licensestatement}`
      
      fs.writeFile("README.md", README, (error) => {
        if (error){
          console.log(error);
        } else {
            console.log("README successfully generated!");
        }
      })
      }
  );

 