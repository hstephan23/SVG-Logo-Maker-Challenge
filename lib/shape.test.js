const { Triangle, Circle, Square, LogoGenerator } = require("./shape");

describe("Shape", () => {
    describe("Triangle", () => {
        it("Should create a blue triangle with green text", () => {
            const newShape = new Triangle(
                "Green",
                "Blue",
                "HTS"
            );

            const expected = `<polygon points="150, 18 244, 182 56, 182" fill="Green" />
    <text x="50%" y="65%" text-anchor="middle" dy=".3em" fill="Blue" font-size="350%">HTS</text>`;;

            expect(newShape.generateSVG()).toBe(expected);
        })
    }), 
    describe("Circle", () => {
        it("Should create a red circle with purple text", () => {
            const newShape = new Circle(
                "Red",
                "Purple",
                "AJS"
            )

            const expected = `<circle cx="150" cy="100" r="100" fill="Red" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="Purple" font-size="450%">AJS</text>`;

            expect(newShape.generateSVG()).toBe(expected);
        })
    }),
    describe("Square", () => {
        it("Should create a red square with blue text, given the hexidecimal value", () => {
            const newShape = new Square(
                "#FF0000",
                "#0000FF",
                "MBS"
            )

            const expected = `<rect x="75" y="25" width="150" height="150" fill="#FF0000" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#0000FF" font-size="500%">MBS</text>`;

            expect(newShape.generateSVG()).toBe(expected);
        })
    })
});

describe("functionality", () => {
    describe("tooLong", () => {
        it("Should not allow the creation of a data file if the length is too long", () => {
            const newShape = new LogoGenerator(
                "FISH", 
                "Purple",
                "Square",
                "Yellow"
            )

            const expected = "";

            expect(newShape.generateSVG()).toBe(expected);
        })
    }),
    describe("rightLength", () => {
        it("Should allow for the creation of a new file if the length is correct", () => {
            const newShape = new LogoGenerator(
                "FTS",
                "Purple",
                "Square",
                "Yellow"
            )

            const expected = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="75" y="25" width="150" height="150" fill="Yellow" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="Purple" font-size="500%">FTS</text>
</svg>`;
            expect(newShape.generateSVG()).toBe(expected);
        })
    })
})