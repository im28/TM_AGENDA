import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import classnames from "classnames";
import CustomButton from "../MiniComponents/CustomButton"

const RoleContainer = (props) => (
    <div className={classnames( styles.roleContainer)}>
        <CustomButton value="Apply"/>
        <p>h</p>
        <h1>hello</h1>
        <CustomButton value="Apply"/>
    </div>
);

export default RoleContainer;