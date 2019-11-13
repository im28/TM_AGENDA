import React, {Component} from 'react';
import styles from "./profil.module.sass"
import style from "../../MiniComponents/miniComponents.module.sass"
import CustomButton from '../../MiniComponents/CustomButton'
// import AuthContext from '../../../context/auth-context';
let colors=["#772432","#004165","#CD202C","#F2DF74"];
let colorname=["TMpurple","TMblue","TMred","TMyellow"];

class Profil extends Component{
    // constructor(props) {
    //     super(props);
    // }

    // static contextType = AuthContext;

    state = {
        firstname: "",
        lastname: "",
        totalRoles: 0,
        points: 0,
        trophies: 0

    }


    render(){

        return(
            
            <div className={(style.bg)} >
                    <div className={ styles.profilPic}>{"hello"}</div>
                    <div className={ styles.statusRole}>{this.state.totalRoles}</div>
                    <div className={ styles.statusPoint}>{this.state.points}</div>
                    <div className={ styles.statusTrophies}>{this.state.trophies}</div>
                    <div className={ styles.statusRoleTxt}>Roles taken</div>
                    <div className={ styles.statusPointTxt}>Points</div>
                    <div className={ styles.statusTrophiesTxt}>Trophies</div>
                    <div className={ styles.dividerLeft}></div>
                    <div className={ styles.dividerRight}></div>
                    <div className={ styles.performance}>Performance</div>
                    <div className={ styles.nextRole}>Next Role</div>
                    <div className={ styles.performanceContainer}>
                        <div className={ styles.userPerformance}></div>
                        <div className={ styles.userPerformance}></div>
                        <div className={ styles.userPerformance}></div>
                    </div>
                    <div className={ styles.userRoles}>
                        General Evaluator
                        <div className={ styles.userRolesContainer}>As a general evaluator your roles will be: 
                            <div>1.</div>
                            <div>2.</div>
                            <div>3.</div>
                            <div>4.</div>
                        </div>
                        <CustomButton 
                            value="Download Script" 
                            color= {colorname[0]}
                        />
                    </div>
            </div>
        )
    }
}

export default Profil;