import React, { useState,useEffect } from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import CustomButton from "../MiniComponents/CustomButton"
import classnames from "classnames";
import "../MiniComponents/common.sass"
import PopUp from "../MiniComponents/Apply/PopUp.jsx"

let inputElementsRoles = [["Theme"],[],["Word of the day"],[],[],[],[]]
let inputElementsSpeakers = ["Title","Project Number", "Pathway" ,"Title"]
const RoleContainer = (props) => {
    const [open, setopen] = useState(false);
    const [openEvaluate, setopenEvaluate] = useState(false);
    const closeModal = () =>{
        setopen(false);
        console.log(open);
    }
    const openModal = () =>{
        setopen(true);
        console.log("helloo");
    }
    const closeModalE = () =>{
        setopenEvaluate(false);
        console.log(open);
    }
    const openModalE = () =>{
        setopenEvaluate(true);
        console.log("helloo");
    }
    return(
    <div 
    className={classnames(styles.roleContainer,props.class)} 
    style={{backgroundColor:props.color,height:(props.isSpeaker) ? "15rem":""}}>
            {
                open &&
                <PopUp
                    open={closeModal}
                    title= {props.name}
                    icon={props.icon}
                    hasTextInput={true}
                    inputElements ={props.isSpeaker ? inputElementsSpeakers : inputElementsRoles[props.id]}
                    background = {props.color}
                    colorname = {props.colorname}
                />
            }
            {
                openEvaluate &&
                <PopUp
                    open={closeModalE}
                    title= {"Evaluator"}
                    icon={"fas fa-sticky-note"}
                    hasTextInput={true}
                    inputElements ={[]}
                    background = {props.color}
                    colorname = {props.colorname}
                />
            }
            <p className={styles.roleTag}>{props.name ? props.name:"hello"}</p>
            <i className={classnames(styles.icon,props.icon)} >
                {/* {props.icon} */}
            </i>
            {props.isMyRole ?   <button className={classnames("btnExit",props.colorname)}>
                                    <i className="fas fa-sign-out-alt"></i> 
                                </button> : ""}
            <CustomButton 
                value="Apply" 
                style={{
                    marginBottom: (props.isSpeaker) ? "0.5rem" :"1.75rem",
                    justifySelf: "flex-end"}}
                color= {props.colorname}
                onClick={openModal}
            />
            {   (props.isSpeaker) ?
                    <CustomButton 
                    value="Evaluate" 
                    style={{
                        marginBottom: "1.75rem",
                        justifySelf: "flex-end"}}
                    color= {props.colorname}
                    onClick={openModalE}
                    />
                :""
            }    
    </div>
)};

export default RoleContainer;