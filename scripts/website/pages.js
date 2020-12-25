let fs = require("fs");
let path = require("path");
let paths = require("../../paths.js");
let template = require("../lib/template.js");
let virtualFile = require("../lib/virtual-file.js");
let util = require("../utils.js");

//Build website pages
module.exports = function (config, data, layouts) {
    let compilePageTemplate = function (name, content) {
        return layouts[name].replace(/\{\{(?:\s*)(content)(?:\s*)\}\}/g, content);
    };
    //Build pages
    util.walkdir(paths.websitePages, [".html"], function (file) {
        let page = virtualFile(path.join(paths.websitePages, file)); //Create the new virtual file
        virtualFile.read(page); //Read virtual file content
        //Build the output filename
        let outputPagePath = path.normalize(path.format({
            "root": "/",
            "dir": path.join("/", path.dirname(file)),
            "name": path.basename(file, path.extname(file)),
            "ext": ".html"
        }));
        let layoutName = (typeof page.data.layout === "string") ? page.data.layout : "default.html";
        //Generate page content
        let pageContent = template.compile(compilePageTemplate(layoutName, page.content), {
            "site": config,
            "page": {
                "url": outputPagePath,
                "title": page.data.title,
                "data": page.data
            },
            "data": data,
            "title": "Hello world"
        });
        //Update the virtualfile with the new folder and paths
        Object.assign(page, {
            "dirname": path.join(paths.public, path.dirname(outputPagePath)),
            "content": pageContent,
            "extname": ".html"
        });
        //Write the virtual file
        return virtualFile.write(page);
    });
};

