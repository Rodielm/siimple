const fs = require("fs");
const path = require("path");
const utils = require("./utils.js");
const args = process.argv.slice(2); //Get arguments

//Convert path to array
const castPath = function (p) {
    return p.replace(/\[["']?(\w+)['"]?\]/g, ".$1").replace(/^\./, "").split(".");
};

//Register global methods
Object.assign(global, {
    "set": function (keyPath, value) {
        return function (json) {
            let paths = castPath(keyPath);
            let _json = json; //Get reference to root json
            for (let i = 0; i < paths.length - 1; i++) {
                _json = _json[paths[i]];
            }
            _json[paths[paths.length - 1]] = value;
            return json;
        };
    },
    "unset": function (keyPath) {
        return function (json) {
            let paths = castPath(keyPath);
            let _json = json; //Get reference to root json
            for (let i = 0; i < paths.length - 1; i++) {
                _json = _json[paths[i]];
            }
            delete _json[paths[paths.length - 1]];
            return json;
        };
    },
    "countBy": function (field) {
        return function (json) {
            let counts = {};
            json.forEach(function (item) {
                let key = item[field]; //Get key
                if (typeof counts[key] === "undefined") {
                    counts[key] = 0; //Initialize count of this value
                }
                //Increment the count
                counts[key] = counts[key] + 1;
            });
            return counts;
        };
    },
    "sortBy": function (key) {
        return function (json) {
            return json.sort(function (a, b) {
                let isNum = !isNaN(+a[key] - +b[key]);
                let aValue = (isNum === true) ? +a[key] : a[key].toLowerCase();
                let bValue = (isNum === true) ? +b[key] : b[key].toLowerCase();
                //Return the sorted value
                return (aValue < bValue) ? -1 : 1;
            });
        };
    }
});

//Apply the provided function to the JSON
const applyFn = function (code, json) {
    //Check for dot codes --> execute the provided function
    if (/^\./.test(code)) {
        return eval(`function fn() { return this${code}; }; fn`).call(json);
    }
    //Other value --> wrap inside a function
    var fn = eval(`function fn() { return ${code}; }; fn`).call(json);
    if (typeof fn === "function") {
        return fn(json);
    }
    //Other value --> return the eval
    return fn;
};

//Process JSON
process.nextTick(function () {
    let json = utils.readJSON(args[0]); //Read input JSON
    args.shift(); //Remove input file path
    args.forEach(function (code, index) {
        json = applyFn(code, json);
    });
    //Check if output is an string
    if (typeof json === "string") {
        return console.log(json);
    }
    //Print json in console
    console.log(JSON.stringify(json, null, "    "));
    return null;
});

