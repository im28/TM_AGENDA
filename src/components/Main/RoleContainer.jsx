import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import CustomButton from "../MiniComponents/CustomButton"
import classnames from "classnames";
let colors={
    TMyellow: "#F2DF74",
    TMblue: "#004165",
    TMgray: "#A9B2B1",
    TMred: "#CD202C"
}
const RoleContainer = (props) => (
    <div className={styles.roleContainer}>
            <p className={styles.roleTag}>Toastmaster of the evening</p>
            <i className={classnames("material-icons",styles.icon)}>
                mic_none
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