import React, {Component} from 'react';
import styles from "./main.module.sass"

class MainComponent extends Component{
    constructor(props) {
        super(props);

        this.state = { 
            transform: ""
        };
      }

    componentDidMount() {
        this.boxClick();
        window.addEventListener("resize",  this.boxClick);
    }

    boxClick = (e) => {
        var ratio = document.documentElement.clientWidth / 1349;
        var scale = 'scale(' + ratio + ')';
        this.setState({
            transform: scale
        })
    }

    render(){

        return(
            <div className={ styles.container} style={{transform: this.state.transform}}>

                <div className={ styles.dateText} >MONDAY 15TH OCTOBER</div> 
                <div className={ styles.rolesText}>Roles</div>
                <div className={ styles.skeText}>Speakers & Evaluators</div>

                <div className={ styles.navbar}>
                    <div className={ styles.profil}></div>
                    <div className={ styles.profilText}>Miley Cyrus</div>
                    <div className={ styles.nextWeek}></div>
                    <div className={ styles.nextWeekText}>Next Week</div>
                    <div className={ styles.summary}></div>
                    <div className={ styles.summaryText}>Summary</div>
                </div>

                <div className={styles.TME} >
                    <div className={styles.rolesName}>Toastmaster of the evening</div>
                    <button  className={styles.btnApply} id={styles.applyText}>Apply</button>
                </div>

                <div className={styles.SAA}>
                    <div className={styles.rolesName}>Surgent At Arms</div>
                    <button className={styles.btnApply} id={styles.applyText}>Apply</button>
                </div>

                <div className={styles.GMN}>
                    <div className={styles.rolesName}>Grammarian</div>
                    <button className={styles.btnApply} id={styles.applyText}>Apply</button>
                </div>

                <div className={styles.AC}>
                    <div className={styles.rolesName}>Ah-Counter</div>
                    <button className={styles.btnApply} id={styles.applyText}>Apply</button>
                </div>

                <div className={styles.GE}>
                    <div className={styles.rolesName}>General Evaluator</div>
                    <button className={styles.btnApply} id={styles.applyText}>Apply</button>
                </div>

                <div className={styles.TM}>
                    <div className={styles.rolesName}>Topics Master</div>
                    <button className={styles.btnApply} id={styles.applyText}>Apply</button>
                </div>

                <div className={styles.SP1}>
                    <div className={styles.rolesName}>Speaker 1</div>
                    <button className={styles.btnApply} id={styles.applyText}>Apply</button>
                    <button className={styles.btnEvaluate} id={styles.applyText}>Evaluate</button>
                </div>

                <div className={styles.SP2}>
                    <div className={styles.rolesName}>Speaker 2</div>
                    <button className={styles.btnApply} id={styles.applyText}>Apply</button>
                    <button className={styles.btnEvaluate} id={styles.applyText}>Evaluate</button>
                </div>

                <div className={styles.SP3}>
                    <div className={styles.rolesName}>Speaker 3</div>
                    <button className={styles.btnApply} id={styles.applyText}>Apply</button>
                    <button className={styles.btnEvaluate} id={styles.applyText}>Evaluate</button>
                </div>
                
                <div className={styles.SP4}>
                    <div className={styles.rolesName}>Speaker 4</div>
                    <button className={styles.btnApply} id={styles.applyText}>Apply</button>
                    <button className={styles.btnEvaluate} id={styles.applyText}>Evaluate</button>
                </div>

            </div>
        )
    }
}

export default MainComponent;