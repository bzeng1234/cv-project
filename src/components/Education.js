import React, {Component} from "react";
import Button from "./Button";

class Education extends Component {
    render() {
        return (<>
                <h2 className="header">Education</h2>
                <form className="education-form" autocomplete="off">
                    <input className="school-name" type="text" id="school-name" name="school-name" placeholder="school name"></input>
                    <input className="major" type="text" id="major" name="major" placeholder="major"></input>
                    <input className="grad-year" type="number" id="grad-year" name="grad-year" placeholder="graduation year" min='1900'></input>
                    <Button />
                </form>
                </>);
    };
}

export default Education;