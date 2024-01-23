const inquirer = require("inquirer");
const fs = require("fs");

class SVGShape {
    constructor(color, nameColor, name) {
        this.color = color;
        this.nameColor = nameColor;
        this.name = name;
    }
}

class Circle extends SVGShape {
    constructor(color, nameColor, name) {
        super(color, nameColor, name);
    }

    generateSVG() {
        return `<circle cx="100" cy="100" r="80" fill="${this.color}" />
        <text x="35%" y="50%" text-anchor="middle" dy=".3em" fill="${this.nameColor}" font-size="450%">${this.name}</text>`;
    }
}

class Square extends SVGShape {
    constructor(color, nameColor, name) {
        super(color, nameColor, name);
    }

    generateSVG() {
        return `<rect width="100" height="100" fill="${this.color}" />
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.nameColor}" font-size="500%">${this.name}</text>`
    }
}

class Triangle extends SVGShape {
    constructor(color, nameColor, name) {
        super(color, nameColor, name);
    }

    generateSVG() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="50%" y="65%" text-anchor="middle" dy=".3em" fill="${this.nameColor}" font-size="350%">${this.name}</text>`;
    }
}

class LogoGenerator {
    constructor(name, nameColor, shape, shapeColor) {
        this.name = name;
        this.nameColor = nameColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    generateSVG() {
        const shape = this.createShape();
        if (this.name.length <= 3) {
            return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.generateSVG()}
</svg>`;
    } else {
        console.log("Please ensure your name is three characters or less");
        return "";
    }
    }

    createShape() {
        if (this.shape === "Circle") {
            return new Circle(this.shapeColor, this.nameColor, this.name);
        } else if (this.shape === "Square") {
            return new Square(this.shapeColor, this.nameColor, this.name);
        } else if (this.shape === "Triangle") {
            return new Triangle(this.shapeColor, this.nameColor, this.name)
        }
    }

    saveToFile() {
        const svgContent = this.generateSVG();
        fs.writeFile("logo.svg", svgContent, (err) =>
            err ? console.log(err) : console.log(`Generated logo.svg`)
        );
    }

    static promptUser() {
        return inquirer.prompt([
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
            },
        ]);
    }
}



module.exports = LogoGenerator;