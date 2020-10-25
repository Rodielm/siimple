import React from "react";
import {classNames} from "../utils/classnames.js";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";

//Heading wrapper
export const Heading = function (props) {
    let newProps = filterProps(props, ["type", "className"]); //Filter props
    //Initialize the header class list
    let classList = [];
    //Check the header type
    if (typeof props.type === "string" && props.type.charAt(0).toLowerCase() === "h" && props.type.length === 2) {
        classList.push("siimple-" + props.type.toLowerCase().trim());
    }
    //Generate the header classname
    newProps.className = classNames(classList, props.className);
    //Return the heading element
    return React.createElement("div", newProps, props.children);
};

//Default heading props
Heading.defaultProps = {
    "type": "h1"
};

//Export typography components 
export const Blockquote = createHtmlElement("div", "siimple-blockquote");
export const Code = createHtmlElement("code", "siimple-code");
export const Heading1 = createHtmlElement("div", "siimple-h1");
export const Heading2 = createHtmlElement("div", "siimple-h2");
export const Heading3 = createHtmlElement("div", "siimple-h3");
export const Heading4 = createHtmlElement("div", "siimple-h4");
export const Heading5 = createHtmlElement("div", "siimple-h5");
export const Heading6 = createHtmlElement("div", "siimple-h6");
export const Link = createHtmlElement("a", "siimple-link");
export const Paragraph = createHtmlElement("div", "siimple-paragraph");
export const Lead = createHtmlElement("div", "siimple-lead");
export const Pre = createHtmlElement("pre", "siimple-pre");
export const Small = createHtmlElement("span", "siimple-small");

