let fs = require("fs");
let path = require("path");
let handlebars = require("handlebars");
let paths = require("../paths.js");
let utils = require("./utils.js");

process.nextTick(function () {
    //utils.rmdir(paths.dist); //Clean dist folder
    let distFiles = []; //Output CDN files
    let package = utils.readJSON(paths.package); //Get package content
    //Read all files to publish in the CDN and move to the CDN folder
    package.packages.forEach(function (name) {
        let packagePath = path.join(paths.packages.folder, name);
        return utils.readJSON(path.join(packagePath, "package.json")).dist.forEach(function (file) {
            let inputFilePath = path.join(packagePath, "dist", file);
            let outputFilePath = path.join(paths.dist, file);
            //First ensure the folder is created, and then copy the file
            utils.mkdir(path.dirname(outputFilePath));
            fs.copyFileSync(inputFilePath, outputFilePath);
            //Save the file to the distFiles object and continue
            distFiles.push({
                "file": file,
                "size": utils.fileSize(inputFilePath)
            });
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

