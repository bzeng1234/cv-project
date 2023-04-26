import React, {Component} from "react";
import ResumeForm from "./ResumeForm";
import Resume from "./Resume";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "",
        email: "",
        phoneNumber: ""
      },
      education: {
        school: "",
        major: "",
        gradYear: ""
      },
      experience: {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: ""
      },
      // array of information we will keep track of the users
      generalHistory: [],
      educationHistory: [],
      experienceHistory: []
    };
    this.addGeneralInfo = this.addGeneralInfo.bind(this);
    this.addEducationInfo = this.addEducationInfo.bind(this);
    this.addExperienceInfo = this.addExperienceInfo.bind(this);
  };

  addGeneralInfo(e) {
    e.preventDefault();

    const generalInfoForm = e.target.parentNode.parentNode.childNodes;

    const newGeneralInfo = {
      name: generalInfoForm[0].value,
      email: generalInfoForm[1].value,
      phoneNumber: generalInfoForm[2].value
    };

    this.setState((prevState) => ({
      general: newGeneralInfo,
      generalHistory: [...prevState.generalHistory, newGeneralInfo],
    }));
  };

  addEducationInfo(e) {
    e.preventDefault();

    const educationInfoForm = e.target.parentNode.parentNode.childNodes;

    const newEducationInfo = {
      school: educationInfoForm[0].value,
      major: educationInfoForm[1].value,
      gradYear: educationInfoForm[2].value
    };

    this.setState((prevState) => ({
      education: newEducationInfo,
      educationHistory: [newEducationInfo, ...prevState.educationHistory],
    }));
  };

  addExperienceInfo(e) {
    e.preventDefault();

    const experienceInfoForm = e.target.parentNode.parentNode.childNodes;

    const newExperienceInfo = {
      company: experienceInfoForm[0].value,
      position: experienceInfoForm[1].value,
      startDate: experienceInfoForm[4].value,
      endDate: experienceInfoForm[5].value,
      responsibilities: experienceInfoForm[6].value
    }

    this.setState((prevState) => ({
      experience: newExperienceInfo,
      experienceHistory: [newExperienceInfo, ...prevState.experienceHistory]
    }));
  }

  render() {
    const {generalHistory, educationHistory, experienceHistory} = this.state;
    return (<>
      <ResumeForm handleGeneralInfo={this.addGeneralInfo} handleEducationInfo={this.addEducationInfo} handleExperienceInfo={this.addExperienceInfo}/>
      <Resume general={generalHistory} education={educationHistory} experience={experienceHistory} />
    </>);
  };
}

export default App;