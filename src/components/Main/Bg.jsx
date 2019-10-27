import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import classnames from "classnames";
// import CustomButton from "../MiniComponents/CustomButton"
import RoleContainer from "./RoleContainer";
const Bg = (props) => (

    <div className={classnames( styles.bg,styles.gridContainer)}>
        <RoleContainer/>
        <RoleContainer/>
        <RoleContainer/>
        <RoleContainer/>
        <RoleContainer/>
        <RoleContainer/>
        <RoleContainer/>
    </div>
);

export default Bg;