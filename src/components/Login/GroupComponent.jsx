import React from "react";
import TagComponent from "./MiniComponents/TagComponent"
import InputComponent from "./MiniComponents/InputComponent";
import CustomButtonBig from "./MiniComponents/CustomButtonBig";
import styles from "./MiniComponents/miniComponents.module.sass"
import { Link } from "react-router-dom";

const GroupComponent = () => (
<div>
    <TagComponent value="SIGN IN"/>
    <InputComponent/>
    <Link  to="Blank">
      <CustomButtonBig value="CONTINUE" to="Blank"/>
    </Link>
    {/* <a className={styles.forgotLogin} href="#mainContent">FORGOT PASSWORD</a> */}
    <Link className={styles.forgotLogin} to="Blank">
          FORGOT PASSWORD
    </Link>
  </div>
);

export default GroupComponent;
