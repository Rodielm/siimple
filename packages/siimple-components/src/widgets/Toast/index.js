import React from "react";
import {Alert, AlertTitle, AlertClose} from "../../elements/Alert.js";
import {classNames} from "../../utils/classnames.js";
import "./style.scss";

//Delay wrapper
let delay = function (time, callback) {
    return setTimeout(callback, time);
};

//Export toast wrapper
export function Toast (props) {
    let toastClass = classNames({
        "siimple__toast": true,
        "siimple__toast--center": props.align === "center",
        "siimple__toast--left": props.align === "left",
        "siimple__toast--right": props.align === "right",
        "siimple__toast--visible": props.visible
    });
    //Return the toast component
    return (
        <div className={toastClass} style={{"width": props.width}}>
            <Alert color={props.color} className="siimple--mb-0">
                <AlertClose onClick={props.onClose} />
                {(props.content !== null) ? props.content : props.children}
            </Alert>
        </div>
    );
}

//Toast default props
Toast.defaultProps = {
    "visible": true,
    "width": "600px",
    "color": "error",
    "align": "center", // left|center|right
    "content": null
};

//Export toaster widget component
export class Toaster extends React.Component {
    constructor(props) {
        super(props);
        //Ininitialize the toast state
        this.state = {
            "visible": false,
            "color": "error",
            "message": ""
        };
        this.timer = null;
        //Bind some methods
        this.close = this.close.bind(this);
        this.show = this.show.bind(this);
        //Alert types
        this.error = this.error.bind(this);
        this.success = this.success.bind(this);
        this.warning = this.warning.bind(this);
    }
    //Hide the toast
    close() {
        clearTimeout(this.timer);
        return this.setState({"visible": false});
    }
    //Display a toast message
    show(options) {
        let self = this;
        //Check the provided time
        if (typeof options.timeout !== "number" || optionstimeout <= 0) {
            options.timeout = this.props.timeout;
        }
        //Build the new state
        let newState = {
            "visible": true,
            "color": options.type,
            "message": options.message
        };
        //Display this toast message
        return this.setState(newState, function () {
            //Check if there are an active timer
            if (self.timer) {
                clearTimeout(self.timer);
            }
            //Register the new timer
            self.timer = delay(options.timeout, function () {
                return self.setState({"visible": false});
            });
        });
    }
    //Error alert
    error(options) {
        return this.show(Object.assign(options, {"type": "error"}));
    }
    //Warning alert
    warning(options) {
        return this.show(Object.assign(options, {"type": "warning"}));
    }
    //Success alert
    success(options) {
        return this.show(Object.assign(options, {"type": "success"}));
    }
    render() {
        //Return the toast component
        return React.createElement(Toast, {
            "content": this.state.message,
            "color": this.state.color,
            "visible": this.state.visible,
            "width": this.props.width,
            "align": this.props.align,
            "onClose": this.close
        });
    }
}

//Toast default props
Toaster.defaultProps = {
    "width": "600px",
    "align": "center",
    "cancellable": false,
    "timeout": 5000
};

