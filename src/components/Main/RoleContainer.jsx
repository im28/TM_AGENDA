import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import CustomButton from "../MiniComponents/CustomButton"
import classnames from "classnames";
import "../MiniComponents/common.sass"

const RoleContainer = (props) => (
    <div className={classnames(styles.roleContainer,props.class)}>
            <p className={styles.roleTag}>{props.name ? props.name:"hello"}</p>
            <i className={classnames("material-icons",styles.icon)}>
                {props.icon}
            </i>
            <CustomButton 
                value="Apply" 
                style={{
                    marginBottom: "1.75rem",
                    // color:colors.TMblue ,
                    justifySelf: "flex-end"}}
                color= "TMblue"
            />
            
    </div>
);

export default RoleContainer;