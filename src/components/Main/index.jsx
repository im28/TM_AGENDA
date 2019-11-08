import React, { Component } from "react";
// import ContentComponent from "./GroupComponent"
import Bg from "./Bg";
import classnames from "classnames";
import styles from "../MiniComponents/miniComponents.module.sass"


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    
  }

  render() {
    return (
      <div id="mainContent" 
      className={classnames( styles.side)}
      >
          <Bg/> 
      </div>
    );
  }
}
