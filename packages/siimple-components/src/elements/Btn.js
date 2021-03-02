import React from "react";
import {classNames} from "../utils/classnames.js";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";

//Button component
export const Btn = function (props) {
    //Initialize the button props 
    let newProps = filterProps(props, ["className", "color", "disabled", "fluid", "full", "small", "large"]);
    //Initialize the class names list 
    let classList = ["siimple-btn"];
    //Add the button color
    if (typeof props.color === "string") {
        classList.push("is-" + props.color.toLowerCase().trim());
    }
    //Add the button disabled option
    if (props.disabled === true) {
        classList.push("is-disabled");
    }
    //Check the fluid property
    if (props.fluid === true || props.full === true) {
        //btn_props.style = { width: '100%', paddingLeft: '0px', paddingRight: '0px' };
        classList.push("is-full");
    }
    //Check the small property
    if (props.small === true) {
        classList.push("is-small");
    }
    //Check the large property
    if (props.large === true) {
        classList.push("is-large");
    }
    //Append the provided class names
    newProps.className = classNames(classList, props.className);
    //Return the button element
    return React.createElement("div", newProps, (props.content !== null) ? props.content : props.children);
};

//Default properties values
Btn.defaultProps = { 
    "color": null, 
    "disabled": false, 
    "fluid": false, //DEPRECATED
    "full": false,
    "small": false,
    "large": false,
    "content": null
};

//Button groups
export const BtnGroup = createHtmlElement("div", "siimple-btn-group");

