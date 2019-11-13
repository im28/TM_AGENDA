import React, { Component } from "react";
import Bg from "./Bg";
import Profil from "./Profil/Profil";
import Summary from "./Summary/Summary";
import classnames from "classnames";
import styles from "../MiniComponents/miniComponents.module.sass"
import "./Side.sass"
import "../MiniComponents/common.sass"

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
        <div className={"navigator_select"}/>
        <div className={"navigator"}>
          <div className={"navigator_icon"}>
            {/* <i className="fas fa-calendar-alt"></i> */}
            <p style={{fontSize:"2vmin"}} className={"navigator_tag"}>You</p>
          </div>
          <div className={"navigator_icon"}>
            <i className="fas fa-calendar-alt"></i>
            <p style={{fontSize:"2vmin"}} className={"navigator_tag"}>Next Week</p>
          </div>
          <div className={classnames("TMblue","navigator_icon")}>
            <i className="fas fa-book-open"></i>
            <p style={{fontSize:"2vmin"}} className={"navigator_tag"}>Summary</p>
          </div>
        </div>

        {/* <Bg/>  */}
        {/* <Summary/> */}
        <Profil/>
      </div>
    );
  }
}
