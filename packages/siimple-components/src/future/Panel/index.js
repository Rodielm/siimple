import React from "react";
import {classNames} from "../../utils/classnames.js";
import {createHtmlElement} from "../../utils/element.js";
import "./style.scss";

//Export panel basic components
export const Panel = createHtmlElement("div", "siimple__panel");
export const PanelHeader = createHtmlElement("div", "siimple__panel-header");
export const PanelTitle = createHtmlElement("div", "siimple__panel-title");
export const PanelBody = createHtmlElement("div", "siimple__panel-body");
export const PanelFooter = createHtmlElement("div", "siimple__panel-footer");

//Export tab wrapper
export function PanelTab (props) {
    let tabProps = {
        "className": classNames(props.className, {
            "siimple__panel-tab": true,
            "siimple__panel-tab--active": props.active === true
        }),
        "onClick": props.onClick,
        "style": props.style
    };
    //Build tab element
    return React.createElement("div", tabProps, props.text);
}


