const inquirer = require("inquirer");
const fs = require("fs");

// this is the main class for all the shapes and holds information on what is needed for the other subclasses in its constructor
class SVGShape {
    constructor(color, nameColor, name) {
        this.color = color;
        this.nameColor = nameColor;
        this.name = name;
    }
}


// this puts in the information into the main class for circles and then returns the generated SVG from that information
class Circle extends SVGShape {
    constructor(color, nameColor, name) {
        super(color, nameColor, name);
    }

    generateSVG() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.nameColor}" font-size="450%">${this.name}</text>`;
    }
}

// this puts in the information into the main class for squares and then returns the generated SVG from that information
class Square extends SVGShape {
    constructor(color, nameColor, name) {
        super(color, nameColor, name);
    }

    generateSVG() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.nameColor}" font-size="500%">${this.name}</text>`;
    }
}

// this puts in the information into the main class for triangles and then returns the generated SVG from that information
class Triangle extends SVGShape {
    constructor(color, nameColor, name) {
        super(color, nameColor, name);
    }

    generateSVG() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text x="50%" y="65%" text-anchor="middle" dy=".3em" fill="${this.nameColor}" font-size="350%">${this.name}</text>`;
    }
}


// This is the second class, but runs most everything
class LogoGenerator {
    constructor(name, nameColor, shape, shapeColor) {
        this.name = name;
        this.nameColor = nameColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    // puts it all together so that the SVG is created properly
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

    // uses the previous sub classes and the name of the shape to determine what is created
    createShape() {
        if (this.shape === "Circle") {
            return new Circle(this.shapeColor, this.nameColor, this.name);
        } else if (this.shape === "Square") {
            return new Square(this.shapeColor, this.nameColor, this.name);
        } else if (this.shape === "Triangle") {
            return new Triangle(this.shapeColor, this.nameColor, this.name)
        }
    }

    // saves to file using fs
    saveToFile() {
        const svgContent = this.generateSVG();
        fs.writeFile("logo.svg", svgContent, (err) =>
            err ? console.log(err) : console.log(`Generated logo.svg`)
        );
    }

// this is the function for the user input, uses static so that the function is not an instance 
    static promptUser() {
        // return the object from inquirer
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


// necessary to export all individual pieces for the testing, in future creating separate files would have made cleaner code
module.exports = {
    LogoGenerator,
    SVGShape,
    Circle,
    Square, 
    Triangle
};