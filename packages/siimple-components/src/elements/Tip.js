import React from "react";
import {classNames} from "../utils/classnames.js";
import {filterProps} from "../utils/props.js";

//Tip class
export const Tip = function (props) {
    //let newProps = filterProps(props, ["className", "color", "icon"]);
    let newProps = filterProps(props, ["className", "color"]);
    let classList = ["siimple-tip"];
    //Add the tip color
    if (typeof props.color === "string") {
        classList.push("is-" + props.color.toLowerCase().trim());
    }
    ////Add the tip icon
    //if (typeof props.icon === "string") {
    //    classList.push("is-" + props.icon.toLowerCase().trim());
    //}
    //Generate the class names
    newProps.className = classNames(classList, props.className);
    //Return the tip element
    return React.createElement("div", newProps, props.children);
};

//Initialize the tip element default props
Tip.defaultProps = { 
    "color": "primary"
};

