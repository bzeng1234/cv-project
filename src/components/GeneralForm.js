import React, {Component} from "react";

class General extends Component {

    render() {
        return (<>
            <h2 className="header">General Information</h2>
            <form className="general-info-form" autoComplete="off">
            <input className="name" type="text" id="name" name="name" placeholder="FULL NAME"></input>
            <input className="email" type="email" id="email" name="email" placeholder="EMAIL"></input>
            <input className="number" type="text" id="number" name="number" placeholder="PHONE NUMBER"></input>
            <div className="button-container">
                <button type="submit" onClick={this.props.handleGeneralInfo}>Add</button>
                <button type="button">Edit</button>
            </div>
        </form>
        </>);
    };
}

export default General;