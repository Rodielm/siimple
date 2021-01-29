let fs = require("fs");
let path = require("path");
let handlebars = require("handlebars");
let paths = require("../paths.js");
let utils = require("./utils.js");

process.nextTick(function () {
    //utils.rmdir(paths.dist); //Clean dist folder
    let distFiles = []; //Output CDN files
    let package = utils.readJSON(paths.package); //Get package content
    //Read the dist folder and get all *.min.css files
    fs.readdirSync(paths.dist, "utf8").forEach(function (file) {
        if (file.endsWith(".min.css") === false) {
            return null; //Ignore this file
        }
        //Save the file to the distFiles object and continue
        distFiles.push({
            "file": file,
            "size": utils.fileSize(path.join(paths.dist, file))
        });
    });
    //Build the index file
    let distPageInput = path.join(__dirname, "templates", "dist.html");
    let distPageOutput = path.join(paths.dist, "index.html");
    let distContent = handlebars.compile(fs.readFileSync(distPageInput, "utf8"))({
        "version": package.version,
        "files": distFiles
    });
    //Write the dist entry file and exit
    return fs.writeFileSync(distPageOutput, distContent, "utf8");
});

