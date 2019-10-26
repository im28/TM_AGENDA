import React from "react";
import styles from "./miniComponents.module.sass"


const CustomButton = (props) => (
    <button className={ styles.customButton} style = {props.style}>
        {props.value}
    </button>
);

export default CustomButton;