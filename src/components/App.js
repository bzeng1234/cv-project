import React, {Component} from "react";
import ResumeForm from "./ResumeForm";
import Resume from "./Resume";
import Experience from "./Experience";

class App extends Component {
  render() {
    return (<>
      <ResumeForm />
      <Resume />
    </>);
  };
}

export default App;