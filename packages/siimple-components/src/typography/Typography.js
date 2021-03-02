import React from "react";
import {classNames} from "../utils/classnames.js";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";

//Title component
export const Title = function (props) {
    let newProps = filterProps(props, ["size", "className"]); //Filter props
    //Initialize the header class list
    let classList = ["siimple-title"];
    if (typeof props.size === "string" || typeof props.size === "number") {
        classList.push("is-" + props.size);
    }
    //Generate the header classname
    newProps.className = classNames(classList, props.className);
    //Return the heading element
    return React.createElement("div", newProps, props.children);
};

//Title default props
Title.defaultProps = {
    "size": "1"
};

//Heading wrapper
export const Heading = function (props) {
    console.warn("Siimple.Heading component has been deprecated. Please use Siimple.Title instead");
    return React.createElement(Title, {"size": props.type.replace("h","")}, props.children);
};

//Default heading props
Heading.defaultProps = {
    "type": "h1"
};

//Export typography components 
export const Blockquote = createHtmlElement("div", "siimple-blockquote");
export const Code = createHtmlElement("code", "siimple-code");
export const Codeblock = createHtmlElement("pre", "siimple-codeblock");
export const Link = createHtmlElement("a", "siimple-link");
export const Paragraph = createHtmlElement("div", "siimple-paragraph");
export const Lead = createHtmlElement("div", "siimple-lead");
export const Pre = createHtmlElement("pre", "siimple-codeblock"); //DEPRECATED
export const Small = createHtmlElement("span", "siimple-small");

