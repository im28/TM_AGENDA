import React from "react";
import styles from "./profil.module.sass"
import classnames from "classnames";

const ProfilBG = (props) => (

    <div 
        className={styles.bg}
        style={{
            marginTop: "3rem",
            borderRadius: "20rem 0rem 0rem 0rem",
        }}
    >
        <div className={styles.gridContainer}>
        <div className={styles.profilPic}></div>
            <div className={styles.status} style={{gridArea: "2 / 1 / 3 / 3"}}>25</div>
            <div className={styles.status} style={{gridArea: "2 / 3 / 3 / 5"}}>30</div>
            <div className={styles.status} style={{gridArea: "2 / 5 / 3 / 7"}}>5</div>
            <div className={styles.statusText} style={{gridArea: "3 / 1 / 4 / 3"}}>Roles taken</div>
            <div className={styles.statusText} style={{gridArea: "3 / 3 / 4 / 5"}}>Points</div>
            <div className={styles.statusText} style={{gridArea: "3 / 5 / 4 / 7"}}>Trophies</div>
            <div style={{gridArea: "4 / 2 / 5 / 4"}}>
                <div className={styles.performance}>Performance</div>
                <div className={styles.bestEvaluator}></div>
                <div className={styles.bestEvaluator}></div>
                <div className={styles.bestEvaluator}></div>
            </div>
            <div style={{gridArea: "4 / 4 / 5 / 6"}}>
                <div className={styles.performance}>Next Role</div>
                <div className={styles.generalEvaluator}></div>
            </div>
        </div>  
    </div>
);

export default ProfilBG;