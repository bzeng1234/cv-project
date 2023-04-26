import React, {Component} from "react";

class Experience extends Component {
    
    render() {
        return (<>
        <h2 className="header">Experience</h2>
        <form className="experience-form" autoComplete="off">
            <input className="company-name" type="text" id="company-name" name="company-name" placeholder="COMPANY NAME"></input>
            <input className="position" type="text" id="position" name="position" placeholder="POSITION"></input>
            <h4 className="header">Start Date</h4>
            <h4 className="header">End Date</h4>
            <input className="start-date" type="date" id="start-date" name="start-date"></input>
            <input className="end-date" type="date" id="end-date" name="end-date"></input>
            <textarea className="job-description" id="job-description" name="job-description"></textarea>
            <div className="button-container">
                <button type="submit" onClick={this.props.handleExperienceInfo}>Add</button>
                <button type="button">Edit</button>
            </div>
        </form>
        </>);
    };
}

export default Experience;