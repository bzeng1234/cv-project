import React, {Component} from "react";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

class ResumeForm extends Component {
    
    render() {
        let {handleGeneralInfo, handleEducationInfo, handleExperienceInfo} = this.props;
        return <div className="resume-form">
            <GeneralForm handleGeneralInfo={handleGeneralInfo}/>
            <EducationForm handleEducationInfo={handleEducationInfo}/>
            <ExperienceForm handleExperienceInfo={handleExperienceInfo}/>
        </div>;
    };
}

export default ResumeForm;