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
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  
 
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
    .then((response) =>    
      {
        console.log(response.title);
      let README = `# ${response.title}`
      
      fs.writeFile("README1.md", README, (error) => {
        if (error){
          console.log(error);
        }
      })
      }
  );
