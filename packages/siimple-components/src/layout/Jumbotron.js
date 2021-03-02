import React from "react";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";
import {classNames} from "../utils/classnames.js";

//Jumbotron base component
export const Jumbotron = function (props) {
    let newProps = filterProps(props, ["className", "color", "size"]);
    //Initialize the jumbotron class names list
    let classList = ["siimple-jumbotron"];
    //Check the jumbotron color
    if (typeof props.color === "string") {
        classList.push("is-" + props.color.toLowerCase());
    }
    //Check the jumbotron size property
    if (typeof props.size === "string") {
        classList.push("is-" + props.size.toLowerCase());
    }
    //Check the jumbotron fullheight
    if (props.fullheight === true) {
        classList.push("is-fullheight");
    }
    //Generate the jumbotron classname
    newProps.className = classNames(classList, props.className);
    //Return the parent div
    return React.createElement("div", newProps, props.children);
};

//Jumbotron default props
Jumbotron.defaultProps = {
    "color": null, 
    "size": null,
    "fullheight": false
};

//Other jumbotron components
export const JumbotronTitle = createHtmlElement("div", "siimple-jumbotron-title");
export const JumbotronSubtitle = createHtmlElement("div", "siimple-jumbotron-subtitle");

