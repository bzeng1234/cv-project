import React, {Component} from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class ResumeForm extends Component {
    render() {
        return <div className="resume-form">
            <General/>
            <Education/>
            <Experience/>
        </div>;
    };
}

export default ResumeForm;