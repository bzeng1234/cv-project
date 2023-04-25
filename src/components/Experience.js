import React, {Component} from "react";
import Button from "./Button";

class Experience extends Component {
    render() {
        return (<>
        <h2 className="header">Experience</h2>
        <form className="experience-form" autocomplete="off">
            <input className="company-name" type="text" id="company-name" name="company-name" placeholder="company name"></input>
            <input className="position" type="text" id="position" name="position" placeholder="position"></input>
            <h4 className="header">Start Date</h4>
            <h4 className="header">End Date</h4>
            <input className="start-date" type="date" id="start-date" name="start-date"></input>
            <input className="end-date" type="date" id="end-date" name="end-date"></input>
            <textarea className="job-description" id="job-description" name="job-description"></textarea>
            <Button />
        </form>
        </>);
    };
}

export default Experience;