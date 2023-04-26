import React, {Component} from "react";

class General extends Component {

    handleInformation() {
        let result = this.props.general.map((element,index) => {
           return(
            <div key={index} className="general-info">
                <div className="general-name">{element.name}</div>
                <div className="general-email">{element.email}</div>
                <div className="general-number">{element.phoneNumber}</div>
            </div>
           ); 
        });
        return result;
    };

    render() {
        return (<div className="general-info-container">
            <h3 className="resume-header">Contact Information</h3>
            {this.handleInformation()}
            </div>);
    };
};

export default General;