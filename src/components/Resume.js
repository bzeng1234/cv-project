import React, {Component} from "react";
import General from "./General";
import '../styles/resume.css'
import Education from "./Education";
import Experience from "./Experience";

class Resume extends Component {

    render() {
        const {general, education, experience} = this.props;
        return (<div className="resume">
            <General general={general}/>
            <Education education={education}/>
            <Experience experience={experience}/>
        </div>
        );
    };
}

export default Resume;