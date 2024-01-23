const { LogoGenerator } = require("./lib/shape");

(async () => {
    const userInput = await LogoGenerator.promptUser();

    const logoGenerated = new LogoGenerator (
        userInput.name,
        userInput.nameColor,
        userInput.shape,
        userInput.shapeColor,
    );
    if (logoGenerated.generateSVG()) {
        logoGenerated.saveToFile();
    };
})();

