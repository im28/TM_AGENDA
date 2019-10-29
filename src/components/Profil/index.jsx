import React, { Component } from "react";
import classnames from "classnames";
import styles from "../MiniComponents/miniComponents.module.sass"
import ProfilBg from "./ProfilBG";

export default class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    
  } 

  render() {
    return (
      <div className={classnames( styles.side)} >
        <ProfilBg/>
      </div>
    );
  }
}
