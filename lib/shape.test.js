const shape = require("./shape");

describe("Shape", () => {
    describe("Triangle", () => {
        it("Should create a blue triangle with green text", () => {
            const newShape = new shape(
                "HTS",
                "Green",
                "Triangle",
                "Blue"
            );

            expect(newShape.createShape).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="Green" />
            <text x="50%" y="65%" text-anchor="middle" dy=".3em" fill="Blue" font-size="350%">HTS</text>`)
        })
    })
})