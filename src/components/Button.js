import React, {Component} from "react";

class Button extends Component {
    render() {
        return (<div className="button-container">
            <button type="submit">Add</button>
            <button type="button">Edit</button>
        </div>);
    };
}

export default Button;