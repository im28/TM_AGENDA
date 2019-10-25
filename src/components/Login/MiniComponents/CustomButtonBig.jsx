import React from "react";
import styles from "./miniComponents.module.sass"


const CustomButtonBig = (props) => (
    <button className={ styles.customButtonBig}>
        {props.value}
    </button>
);

export default CustomButtonBig;