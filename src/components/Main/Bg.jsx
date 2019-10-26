import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import classnames from "classnames";
import CustomButton from "../MiniComponents/CustomButton"
import RoleContainer from "./RoleContainer";
const Bg = (props) => (
    
    <div className={classnames( styles.bg)}>
        <RoleContainer/>
    </div>
);

export default Bg;