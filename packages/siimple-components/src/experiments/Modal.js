import React from "react";
import {createHtmlElement} from "../utils/element.js";
import {filterProps} from "../utils/props.js";
import {classNames} from "../utils/classnames.js";

//Export main modal component
export const Modal = function (props) {
    let newProps = filterProps(props, ["className", "width"]); //Filter props
    //Initialize the modal class
    let classList = ["siimple-modal"];
    //Check for modal predefined size
    if (typeof props.size === "string") {
        classList.push("siimple-modal--" + props.size.toLowerCase());
    }
    //Merge the modal class names
    newProps.className = classNames(classList, props.className);
    //Return the modal wrapper element
    return React.createElement("div", newProps, props.children);
};

//Modal default props
Modal.defaultProps = {
    "size": null
};

//Other Modal componens
export const ModalContent = createHtmlElement("div", "siimple-modal-content");
export const ModalHeader = createHtmlElement("div", "siimple-modal-header");
export const ModalHeaderTitle = createHtmlElement("div", "siimple-modal-header-title");
export const ModalHeaderClose = createHtmlElement("div", "siimple-modal-header-close");
export const ModalBody = createHtmlElement("div", "siimple-modal-body");
export const ModalFooter = createHtmlElement("div", "siimple-modal-footer");

//Modal wrapper
export const ModalWrapper = function (props) {
    return (
        <Modal size={props.size}>
            <ModalContent>
                <ModalHeader>
                    <ModalHeaderTitle>{props.title}</ModalHeaderTitle>
                    <ModalHeaderClose onClick={props.onClose} />
                </ModalHeader>
                {props.children}
            </ModalContent>
        </Modal>
    );
};


