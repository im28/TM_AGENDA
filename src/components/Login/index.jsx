import React, { Component } from "react";
import ContentComponent from "./GroupComponent"
import classnames from "classnames";
import styles from"./Login.css"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    
  }

  render() {
    return (
      <div id="mainContent" className={classnames( styles.center,"container")}>
          <ContentComponent />
      </div>
    );
  }
}
