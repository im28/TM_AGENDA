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
let name = ["Toastmaster of the evening","Surgent At Arms","Grammarian","Ah-Counter" ,"G.Evaluator","Topic Master","Timer"]
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

    <div className={classnames( styles.bg)}>
        <p className={styles.tag} style={{  marginTop: "5.5rem"}}>Roles</p>
        <p className={styles.dateHeader}>MONDAY 15TH OCTOBER</p>
        <div className={classnames(styles.gridContainerSpeaker ,"container")}
        style={{marginTop:"10rem"}}>
            <RoleContainer/>
            <RoleContainer/>
            <RoleContainer/>
            <RoleContainer/>
        </div>
        <div className={classnames(styles.gridContainerSpeaker ,"container")} 
        style={secondRow}>
            <RoleContainer/>
            <RoleContainer/>
            <RoleContainer/>
        </div>
        <p className={styles.tag} style={{  marginTop: "40rem"}}>Speakers & Evaluators</p>
        <div className={classnames(styles.gridContainerSpeaker  ,"container")}
        style={{marginTop:"45rem"}}>
            <RoleContainer/>
            <RoleContainer/>
            <RoleContainer/>
            <RoleContainer/>
        </div>
    </div>
);

export default Bg;