const inquirer = require("inquirer");
const fs = require("fs");

function createSVG(logoName, logoNameColor, logoShape, logoShapeColor) {
    if (logoShape === "Circle") {
return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="${logoShapeColor}" />
    <text x="50" y="50" text-anchor="middle" dy=".3em" fill="${logoNameColor}">${logoName}</text>
</svg>`
    } else if (logoShape === "Triangle") {
return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 90,90 10,90" fill="${logoShapeColor}" />
    <text x="50" y="50" text-anchor="middle" dy=".3em" fill="${logoNameColor}">${logoName}</text>
</svg>`
    } else if (logoShape === "Square") {
return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" fill="${logoShapeColor}" />
    <text x="50" y="50" text-anchor="middle" dy=".3em" fill="${logoNameColor}">${logoName}</text>
</svg>`
    }
}

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
            message: "What color do you want for the logo name? (color keyword or hexadecimal number including the hashtag)"
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
            message: "What color do you want for shape? (color keyword or hexadecimal number including the hashtag)"
        }
    ])
    .then((data) => {
        console.log(data);
        const svg = createSVG(data.name, data.nameColor, data.shape, data.shapeColor);
        fs.writeFile("data.svg", svg, (err) =>
            err ? console.log(err) : console.log("Success!")
        );
    })