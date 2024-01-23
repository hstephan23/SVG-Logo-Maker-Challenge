const { LogoGenerator } = require("./lib/shape");

(async () => {
    // this is the object from inquirer, using await so that things happen in the right process
    const userInput = await LogoGenerator.promptUser();
    // this is the user input stored in the individual pieces so that it can go into the constructor of the logoGenerator
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

