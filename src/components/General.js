import React, {Component} from "react";
import Button from "./Button";

class General extends Component {
    render() {
        return (<>
            <h2 className="header">General Information</h2>
            <form className="general-info-form" autocomplete="off">
            <input className="name" type="text" id="name" name="name" placeholder="full name"></input>
            <input className="email" type="email" id="email" name="email" placeholder="email"></input>
            <input className="number" type="text" id="number" name="number" placeholder="phone number"></input>
            <Button />
        </form>
        </>);
    };
}

export default General;