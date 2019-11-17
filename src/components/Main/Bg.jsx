import React from "react";
import styles from "../MiniComponents/miniComponents.module.sass"
import classnames from "classnames";
import CustomButton from "../MiniComponents/CustomButton"
import RoleContainer from "./RoleContainer";
import HalfCircleSpinner from '@bit/bondz.react-epic-spinners.half-circle-spinner';

let colors=["#772432","#004165","#CD202C","#F2DF74"]
let colorname=["TMpurple","TMblue","TMred","TMyellow","TMgray"]

let name = ["Toastmaster of the evening","Surgent At Arms","Grammarian","Ah-Counter" ,"General Evaluator","Topic Master","Timer"]
let icon = ["fas fa-microphone-alt","fas fa-wrench","fas fa-bookmark","fas fa-book","fas fa-glasses","fas fa-question","fas fa-stopwatch"]
// let inputElementsRoles = [["Theme"],[],["Word of the day"],[],[],[],[]]
// let inputElementsSpeakers = ["Title","Project Number", "Pathway" ,"Title"]

const Bg = (props) => {
    


    return(
    <div className={classnames(styles.bg)}>
        {/* <div className={classnames("containerPopUp","blur")} onClick={props.open} style={{zIndex:1 ,margin: 0, position:"fixed"}}>
            <HalfCircleSpinner
                color='#000000'
                size={200}
                style={{
                    zIndex:1,
                    margin: "auto" ,
                    top: "50%",
                    transform: `translate(0,-50%)`,
                }}
            />
        </div> */}
        
        
        <p className={styles.dateHeader}>MONDAY 15TH OCTOBER</p>
        <CustomButton 
            value="Logout " 
            icon={<i className="fas fa-door-open"></i>}
            style={{
                margin: "1.2rem 1rem 0 0",
                justifySelf: "flex-end",
                background: colors[1]
            }}
            color= {colorname[4]}
        />
        <p className={styles.tag} style={{ }}>Roles</p>
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