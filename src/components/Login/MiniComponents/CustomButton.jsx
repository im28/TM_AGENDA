import React from "react";
import styles from "./miniComponents.module.sass"


const CustomButton = (props) => (
    <p className={ styles.CustomButton}>
        {props.value}
    </p>
);

export default CustomButton;