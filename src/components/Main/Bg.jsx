import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import classnames from "classnames";
// import CustomButton from "../MiniComponents/CustomButton"
import RoleContainer from "./RoleContainer";


let colors=["#772432","#004165","#CD202C","#F2DF74"]
let colorname=["TMpurple","TMblue","TMred","TMyellow"]

let name = ["Toastmaster of the evening","Surgent At Arms","Grammarian","Ah-Counter" ,"General Evaluator","Topic Master","Timer"]
let icon = ["fas fa-microphone-alt","fas fa-wrench","fas fa-bookmark","fas fa-book","fas fa-glasses","fas fa-question","fas fa-stopwatch"]
let inputElementsRoles = [["Theme"],[],["Word of the day"],[],[],[],[]]
let inputElementsSpeakers = ["Title","Project Number", "Pathway" ,"Title"]

const Bg = (props) => {
    


    return(
    <div className={classnames(styles.bg)}>
        
        <p className={styles.dateHeader}>MONDAY 15TH OCTOBER</p>
        <p className={styles.tag} style={{  marginTop: "5.5rem"}}>Roles</p>
        <div className={classnames(styles.gridContainerSpeaker )}>
            {   name.map((item,index) => (
                    <RoleContainer 
                    name={item} 
                    class={"div"+parseInt(index+1)} 
                    key={"Role"+index} 
                    color= {colors[index%4]}
                    colorname= {colorname[index%4]}
                    icon = {icon[index]}
                    id={index}
                    />
                ))}
        </div>
        <p className={styles.tag}>Speakers & Evaluators</p>
        <div className={classnames(styles.gridContainerSpeaker)}
        style={{  marginBottom: "2.5rem"}}>
            {
                colors.map((item,index) => (
                    <RoleContainer 
                    name={"Speaker "+ parseInt(index+1)} 
                    class={"div1"+parseInt(index+1)} 
                    key={"Speaker"+index} 
                    color= {item}
                    colorname= {colorname[index]}
                    isSpeaker= {true}
                    icon="fas fa-microphone"
                    />
            ))}
        </div>
    </div>
)};

export default Bg;