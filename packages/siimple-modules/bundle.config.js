const path = require("path");

//Export bundle configuration
module.exports = {
    "cwd": path.resolve(__dirname, "./src"),
    "entry": [
        "./elements/*.scss",
        "./typography/*.scss",
        "./form/*.scss",
        "./layout/*.scss",
        "./experiments/*.scss",
        "./grid/*.scss",
        "./helpers/*.scss",
        "./brand.scss",
        "./colors.scss",
        "./icons.scss",
        "./reboot.scss",
        "./root.scss"
    ],
    "resolve": {
        "siimple-lib": "./lib.scss",
        "siimple-colors": "./colors.scss",
        "siimple-icons": "./icons.scss"
    }
};

