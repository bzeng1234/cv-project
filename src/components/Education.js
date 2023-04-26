import React, {Component} from "react";

class Education extends Component {

    handleInformation() {
        let result = this.props.education.map((element,index) => {
           return(
            <div key={index} className="education-info">
                <div className="education-name">{element.school}</div>
                <div className="education-year">{element.gradYear}</div>
                <div className="education-major">{element.major}</div>
            </div>
           ); 
        });
        return result;
    };

    render() {
        return (<div className="education-info-container">
            <h3 className="resume-header">Education</h3>
            {this.handleInformation()}
            </div>);
    };
};

export default Education;