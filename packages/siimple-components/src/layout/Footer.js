import React from "react";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";
import {classNames} from "../utils/classnames.js";

//Footer layout component
export const Footer = function (props) {
    let newProps = filterProps(props, ["className", "size"]); //Filter props
    //Initialize the footer class list
    let classList = ["siimple-footer"];
    //Check the content size
    if (typeof props.size === "string") {
        classList.push("is-" + props.size.toLowerCase());
    }
    //Generate the footer classname
    newProps.className = classNames(classList, props.className);
    //Render the footer div
    return React.createElement("div", newProps, props.children);
};

//Default props
Footer.defaultProps = {
    "size": null 
};

//Other footer components
export const FooterTitle = createHtmlElement("div", "siimple-footer-title");
export const FooterSubtitle = createHtmlElement("div", "siimple-footer-subtitle");
export const FooterLink = createHtmlElement("div", "siimple-footer-link");

