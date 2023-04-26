import React, {Component} from "react";

class Experience extends Component {

    handleInformation() {
        let result = this.props.experience.map((element,index) => {
           return(
            <div key={index} className="experience-info">
                <div className="experience-company">{element.company}</div>
                <div className="experience-position">{element.position}</div>
                <div className="experience-startdate">{element.startDate}</div>
                <div className="experience-enddate">{element.endDate}</div>
                <div className="experience-responsibilities">{element.responsibilities}</div>
            </div>
           ); 
        });
        return result;
    };

    render() {
        return (<div className="experience-info-container">
            <h3 className="resume-header">Professional Experience</h3>
            {this.handleInformation()}
            </div>);
    };
};

export default Experience;