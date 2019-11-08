import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import CustomButton from "../MiniComponents/CustomButton"
import classnames from "classnames";
import "../MiniComponents/common.sass"

const RoleContainer = (props) => (
    <div 
    className={classnames(styles.roleContainer,props.class)} 
    style={{backgroundColor:props.color,height:(props.isSpeaker) ? "15rem":""}}>
            <p className={styles.roleTag}>{props.name ? props.name:"hello"}</p>
            <i className={classnames(styles.icon,props.icon)} ></i>
            

            {props.isMyRole ?   <button className={classnames("btnExit",props.colorname)}>
                                    <i className="fas fa-sign-out-alt"></i> 
                                </button> : ""}
            <CustomButton 
                value="Apply" 
                style={{
                    marginBottom: (props.isSpeaker) ? "0.5rem" :"1.75rem",
                    positon:"absolute" ,
                    marginTop: "5rem",
                    justifySelf: "flex-end"}}
                color= {props.colorname}
            />
            {   (props.isSpeaker) ?
                    <CustomButton 
                    value="Evaluate" 
                    style={{
                        marginBottom: "1.75rem",
                        justifySelf: "flex-end"}}
                    color= {props.colorname}
                    />
                :""
            }    
    </div>
);

export default RoleContainer;