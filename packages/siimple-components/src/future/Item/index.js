import React from "react";
import {createHtmlElement} from "../../utils/element.js";
import {classNames} from "../../utils/classnames.js";
import {filterProps} from "../../utils/props.js";
import {Icon} from "../../icon/Icon.js";
import "./style.scss";

//Export item style
export const Item = createHtmlElement("div", "siimple__item");
export const ItemContent = createHtmlElement("div", "siimple__item-content");
export const ItemBefore = createHtmlElement("div", "siimple__item-before");
export const ItemAfter = createHtmlElement("div", "siimple__item-after");

//Export item icon wrapper
export function ItemIcon (props) {
    let newProps = filterProps(props, ["className", "appearance"]);
    //Assign icon props
    Object.assign(newProps, {
        "className": classNames(props.className, {
            "siimple__item-icon": true,
            "siimple__item-icon--square": props.appearance === "square",
            "siimple__item-icon--circle": props.appearance === "circle"
        }),
        "iconTag": "div" //Display icon in a <div> instead of in a <span>
    });
    //Return the icon wrapper
    return React.createElement(Icon, newProps);
}

ItemIcon.defaultProps = {
    "appearance": "square"
};

