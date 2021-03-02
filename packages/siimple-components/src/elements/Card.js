import React from "react";
import {classNames} from "../utils/classnames.js";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";

//Card base component
export const Card = function (props) {
    let newProps = filterProps(props, ["className", "theme", "size"]);
    newProps.className = classNames(props.className, {
        "siimple-card": true,
        ["is-" + props.theme]: props.theme === "light" || props.theme === "dark",
        ["is-" + props.size]: props.size === "small" || props.size === "large"
    });
    //Return card wrapper
    return React.createElement("div", newProps, props.children);
};

Card.defaultProps = {
    "theme": "",
    "size": ""
};

//Other card components
export const CardContent = createHtmlElement("div", "siimple-card-content");
export const CardImage = createHtmlElement("div", "siimple-card-image");
export const CardLink = createHtmlElement("div", "siimple-card-link");

