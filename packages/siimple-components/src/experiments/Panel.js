import React from "react";
import {classNames} from "../utils/classnames.js";
import {createHtmlElement} from "../utils/element.js";

//Export panel basic components
export const Panel = createHtmlElement("div", "siimple-panel");
export const PanelHeader = createHtmlElement("div", "siimple-panel-header");
//export const PanelTitle = createHtmlElement("div", "siimple-panel-title");
export const PanelBody = createHtmlElement("div", "siimple-panel-body");
export const PanelFooter = createHtmlElement("div", "siimple-panel-footer");

//Export tab wrapper
//export function PanelTab (props) {
//    let tabProps = {
//        "className": classNames(props.className, {
//            "siimple-panel-tab": true,
//            "is-active": props.active === true
//        }),
//        "onClick": props.onClick,
//        "style": props.style
//    };
//    //Build tab element
//    return React.createElement("div", tabProps, props.text);
//}


