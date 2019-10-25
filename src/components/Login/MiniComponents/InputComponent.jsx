import React from "react";
// import classnames from "classnames";
import styles from "./miniComponents.module.sass"
// import styled from 'styled-components';

// const Button = styled.input

const InputComponent = (props) => (
    <div className={styles.loginInput}>
        <input 
        className={ styles.input}
        type="text"
        name="username"
        placeholder="Username"
        />
        <input 
        type="password" 
        name="password" 
        placeholder="Password"
        className={ styles.input}
        id=""/>
    </div>
);

export default InputComponent;