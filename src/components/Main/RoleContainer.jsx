import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import CustomButton from "../MiniComponents/CustomButton"

let colors={
    TMyellow: "#F2DF74",
    TMblue: "#004165",
    TMgray: "#A9B2B1",
    TMred: "#CD202C"
}
const RoleContainer = (props) => (
    <div className={styles.roleContainer}>
            <p className={styles.roleTag}>Toastmaster of the evening</p>
            <i className="fas fa-microphone-alt"></i>
            <CustomButton value="Apply" 
            style={{
                marginBottom: "1.75rem",
                color:colors.TMblue}}
                // Change later
            />
            
    </div>
);

export default RoleContainer;