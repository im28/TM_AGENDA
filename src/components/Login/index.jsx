import React, { Component } from "react";
import ContentComponent from "./GroupComponent"
import classnames from "classnames";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    
  }

  render() {
    return (
      <main id="mainContent" className={classnames("container")}>
          <ContentComponent />
      </main>
    );
  }
}
