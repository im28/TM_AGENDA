import React from "react";
import styles from "./miniComponents.module.sass"


const CustomButton = (props) => (
    <button className={ styles.customButton}>
        {props.value}
    </button>
);

export default CustomButton;