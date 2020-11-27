import React from "react";
import {Btn} from "../../elements/Btn.js";
import {ModalWrapper, ModalBody, ModalFooter} from "../../experiments/Modal.js";
import {classNames} from "../../utils/classnames.js";
import {Renderer} from "../../utils/Renderer.js";

//Export confirm component
export function Confirm (props) {
    if (props.visible === false) {
        return null; //Nothing to render
    }
    //Return the confirm wrapper
    return (
        <ModalWrapper size={props.size} title={props.title} onClose={props.onCancel}>
            {/* Modal body content */}
            <ModalBody>
                {(props.content !== null) ? props.content : props.children}
            </ModalBody>
            {/* Modal Footer content */}
            <ModalFooter align="right" className="siimple--pt-0 siimple--bg-light1">
                <Renderer render={function () {
                    return React.createElement(Btn, {
                        "content": props.cancelText,
                        "className": props.cancelClassName,
                        "color": props.cancelColor,
                        "style": props.cancelStyle,
                        "onClick": props.onCancel
                    });
                }} />
                <Renderer render={function () {
                    return React.createElement(Btn, {
                        "content": props.confirmText,
                        "color": props.confirmColor,
                        "className": classNames("siimple--ml-2", props.confirmClassName),
                        "style": props.confirmStyle,
                        "onClick": props.onConfirm
                    });
                }} />
            </ModalFooter>
        </ModalWrapper>
    );
}

Confirm.defaultProps = {
    "size": "small",
    "visible": true,
    "onCancel": null,
    "onConfirm": null,
    "cancelText": "Cancel",
    "cancelColor": null,
    "cancelStyle": null,
    "cancelClassName": "siimple--text-bold",
    "confirmText": "Ok",
    "confirmColor": "success",
    "confirmStyle": null,
    "confirmClassName": "siimple--text-bold",
    "title": "Are you sure?",
    "content": null
};

//Confirmer component
export class Confirmer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "active": false
        };
        this.show = this.show.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }
    //Show the confirmation dialog
    show(props) {
        return this.setState(Object.assign(props, {
            "active": true
        }));
    }
    //Handle cancel --> hide the confirmation dialog and call the onCancel method
    handleCancel() {
        let props = this.state;
        return this.setState({"active": false}, function () {
            if (typeof props.onCancel === "function") {
                return props.onCancel();
            }
        });
    }
    //Handle confirm --> hide the confirmation dialog and call the onConfirm method
    handleConfirm() {
        let props = this.state;
        return this.setState({"active": false}, function () {
            if (typeof props.onConfirm === "function") {
                return props.onConfirm();
            }
        });
    }
    //Render the confirmation modal
    render() {
        //Check if confirm widget is not active --> render nothing
        if (this.state.active === false) {
            return null; //Confirmation not visible
        }
        //Return the confim wrapper
        return React.createElement(Confirm, Object.assign({}, this.state, {
            "visible": true,
            "onCancel": this.handleCancel,
            "onConfirm": this.handleConfirm
        }));
    }
}

