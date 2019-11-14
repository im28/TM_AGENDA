import React from "react";
import styles from "../../MiniComponents/miniComponents.module.sass"
import "./Summary.sass"
import classnames from "classnames";
import SummaryElement from './SummaryElement'


let colors=["#772432","#004165","#CD202C","#F2DF74"]



let name = ["Toastmaster of the evening","Surgent At Arms","Grammarian","Ah-Counter" ,"General Evaluator","Topic Master","Timer"]

const Summary = (props) => {
    
    return(
    <div className={classnames(styles.bg)}>
        <p className={styles.tag} style={{ marginTop: "4rem",fontSize: "2rem"}}>Summary</p>
        <div className= { "summarygrid"}>
            <p className={styles.tag} style={{  margin: "0"}}>Roles</p>
                {name.map((item,index)=>
                    <SummaryElement
                        color={colors[index%2]}
                        name={item}
                        key={index}
                    />
                )}
            <p className={styles.tag} style={{  margin: "0"}}>Speeches & Evaluations</p>
                <SummaryElement
                    color={colors[0]}
                    name={"Speeches"}
                    column={"auto"}
                />
                <SummaryElement
                    color={colors[1]}
                    name={"Evaluations"}
                />
        </div>
    </div>
)};

export default Summary;