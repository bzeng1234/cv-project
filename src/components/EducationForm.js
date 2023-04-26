import React, {Component} from "react";

class Education extends Component {

    render() {
        return (<>
                <h2 className="header">Education</h2>
                <form className="education-form" autoComplete="off">
                    <input className="school-name" type="text" id="school-name" name="school-name" placeholder="SCHOOL NAME"></input>
                    <input className="major" type="text" id="major" name="major" placeholder="MAJOR"></input>
                    <input className="grad-year" type="number" id="grad-year" name="grad-year" placeholder="GRADUATION YEAR" min='1900'></input>
                    <div className="button-container">
                        <button type="submit" onClick={this.props.handleEducationInfo}>Add</button>
                        <button type="button">Edit</button>
                    </div>
                </form>
                </>);
    };
}

export default Education;