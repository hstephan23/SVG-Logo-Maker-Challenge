const shape = require("./lib/shape");

(async () => {
    const userInput = await shape.promptUser();

    const logoGenerated = new shape (
        userInput.name,
        userInput.nameColor,
        userInput.shape,
        userInput.shapeColor,
    );
    if (logoGenerated.generateSVG()) {
        logoGenerated.saveToFile();
    };
})();

