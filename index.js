const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please type up to 3 characters for your logo name."
        },
        {
            type: "input",
            name: "nameColor",
            message: "What color do you want for the logo name? (color keyword or hexadecimal number)"
        },
        {
            type: "list",
            name: "shape",
            message: "Which shape do you want to choose?",
            choices: ["Circle", "Triangle", "Square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color do you want for shape? (color keyword or hexadecimal number)"
        }
    ])
    .then((data) => {
        console.log(data);
    })