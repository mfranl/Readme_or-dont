// TODO: Include packages needed for this application

const generateMarkdown = require("./utils/generateMarkdown");

const fs = require('fs');

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type:"input",
        message:"Project Title:",
        name:"Title"
    },

    {
        type:"input",
        message:"Project Description:",
        name:"Describe"
    },

    {
        type:"input",
        message:"Installation Guidelines:",
        name:"Install"
    },

    {
        type:"input",
        message:"How to Use:",
        name:"Usage"
    },

    {
        type:"input",
        message:"Contribution Guidelines:",
        name:"Contribute"
    },
    
    {
        type:"input",
        message:"Tests to run:",
        name:"Tests"
    },

    {
        type:"list",
        message:"License used:",
        choices:['MIT', 'GNU GPLv3', 'Apache 2.0', 'none'],
        name:"License"
    },

    {
        type:"input",
        message:"GitHub URL:",
        name:"Github"
    },

    {
        type:"input",
        message:"Email address:",
        name:"Email"
    },

]).then((response) => {




    const newFile = `README.md`;

    fs.writeFile(newFile, generateMarkdown(response), (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log('works')
            }
        }

    )



}).catch(function (err) {
    if (err) {
        console.log("WRONG")
        console.log(err);
    }
})
