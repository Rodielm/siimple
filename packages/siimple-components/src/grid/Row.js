import React from "react";
import {createHtmlElement} from "../utils/element.js";

//Grid class
//DEPRECATED --> not used anymore
export const Grid = function (props) {
    console.warn("siimple-components: Grid component has been removed");
    return React.createElement(React.Fragment, {}, props.children);
};

//Grid row
export const Row = createHtmlElement("div", "siimple-row");


