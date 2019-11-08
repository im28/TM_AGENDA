import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import classnames from "classnames";
// import CustomButton from "../MiniComponents/CustomButton"
import RoleContainer from "./RoleContainer";

let colors={
    TMyellow: "#F2DF74",
    TMblue: "#004165",
    TMgray: "#A9B2B1",
    TMred: "#CD202C"
}
let rolePram = {
    color:"",
    icon:"",
    center:"",
    name: ""
}
let name = ["Toastmaster of the evening","Surgent At Arms","Grammarian","Ah-Counter" ,"General Evaluator","Topic Master","Timer"]
let icon = ["mic_none","bookmark","menu_book"]
let secondRow ={
    marginTop:"25rem",
    gridTemplateColumns: "auto auto auto",
    justifyItems: "end",
    gridColumnGap:"0",
    paddingLeft: "7.8rem",
    paddingRight: "7.8rem"
}
const Bg = (props) => (

    <div className={classnames(styles.bg)}>
        <p className={styles.dateHeader}>MONDAY 15TH OCTOBER</p>
        <p className={styles.tag} style={{  marginTop: "5.5rem"}}>Roles</p>
        <div className={classnames(styles.gridContainerSpeaker ,"container")}>
            {   name.map((item,index) => (
                    <RoleContainer name={item} class={"div"+parseInt(index+1)} key={"Role"+index}/>
                ))
            }
        </div>
        <p className={styles.tag}>Speakers & Evaluators</p>
        <div className={classnames(styles.gridContainerSpeaker  ,"container")}
        style={{  marginBottom: "2.5rem"}}>
            <RoleContainer class={"div11"}/>
            <RoleContainer class={"div12"}/>
            <RoleContainer class={"div13"}/>
            <RoleContainer class={"div14"}/>
        </div>
    </div>
);

export default Bg;