const path = require("path");

//Sass bundle configuration
module.exports = {
    "cwd": path.resolve(__dirname, "./src"),
    "entry": [
        "./variables.scss",
        "./utils.scss",
        "./functions.scss",
        "./mixins.scss",
        "./modules.scss"
    ],
    "resolve": {}
};

