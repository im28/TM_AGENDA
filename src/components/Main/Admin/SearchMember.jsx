import React, {Component} from 'react';
import styles from "./searchMember.module.sass";
// import AuthContext from '../../../context/auth-context';
// import {getIP} from "../../../ipAddress";

class SearchMember extends Component{
    constructor(props) {
        super(props);
        this.usernameEl = React.createRef();
    }

    // static contextType = AuthContext;

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        roles: [],
        totalRoles: 0,
        points: 0,
        trophies: 0
    }

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    roleTable = () => {
        const roles = [
            "Toastmaster of the evening",
            "Surgent At Arms",
            "Grammarian",
            "Ah-Counter",
            "General Evaluator",
            "Topics Master",
            "Speaker 1",
            "Speaker 2",
            "Speaker 3",
            "Speaker 4",
            "Evaluator 1",
            "Evaluator 2",
            "Evaluator 3",
            "Evaluator 4"
        ]
        var count = 0;
        var array = ["Null","Null","Null","Null","Null","Null","Null","Null","Null","Null","Null","Null","Null","Null"]

        var sortedDated = [{
            roleName: "",
            date: ""
        }]

        for(var i = 0; i < this.state.roles.length; i++){
            sortedDated.push({
                roleName: this.state.roles[i].roleName,
                date:  this.state.roles[i].expiryDate.date
            })
        }

        sortedDated.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)
        })

        for(var j = 0; j<14; j++){
            for(var x = 0; x<sortedDated.length; x++){
                if(roles[j]===sortedDated[x].roleName){
                    array[j]=sortedDated[x].date
                } 
            }
        }
        
        const doubled = array.map((roleName) => {
            return <div key={count++} className={styles.roleName}>{roleName}</div>
        });

        return(
            <div className={styles.nameContainer}>
                {doubled}             
            </div>
        )
    }

    render(){
        if (!this.props.show){
            return null;
        }

        return(
            <div>
                    <div className={styles.background}>
                        <input className={styles.searchBar} placeholder="Search member" type="text" ref={this.usernameEl}/>
                        <button className={styles.backBtn} onClick={(e) => {this.onClose(e)}}>Back</button>
                        <button className={styles.searchBtn} onClick={this.fetchUsers}>Search</button>
                        <div className={styles.containerProfil}>
                            <div className={styles.memberName}>{this.state.firstname + " " + this.state.lastname}</div>
                            <button className={styles.changeUserName}>Change email</button>
                            <button className={styles.changePassword}>Change password</button>
                            <div className={styles.profilPic}></div>
                            <div className={styles.statusRole}>
                                <div className={styles.statusValue}>{this.state.totalRoles}</div>
                                <div className={styles.statusText}>Roles taken</div>
                            </div>
                            <div className={styles.statusPoint}>
                                <div className={styles.statusValue}>{this.state.points}</div>
                                <div className={styles.statusText}>Points</div>
                            </div>
                            <div className={styles.statusTrophies}>
                            <div className={styles.statusValue}>{this.state.trophies}</div>
                            <div className={styles.statusText}>Trophies</div>
                            </div>
                            
                        </div>
                        <div className={styles.recordContainer}>
                            <div className={styles.roleTitle}>Role</div>
                            <div className={styles.dateTitle}>Date</div>
                            <div className={styles.roleContainer}>
                                <div className={styles.roleName}>Toastmaster of the evening</div>
                                <div className={styles.roleName}>Surgent At Arms</div>
                                <div className={styles.roleName}>Grammarian</div>
                                <div className={styles.roleName}>Ah-Counter</div>
                                <div className={styles.roleName}>General Evaluator</div>
                                <div className={styles.roleName}>Topics Master</div>
                                <div className={styles.roleName}>Speaker 1</div>
                                <div className={styles.roleName}>Speaker 2</div>
                                <div className={styles.roleName}>Speaker 3</div>
                                <div className={styles.roleName}>Speaker 4</div>
                                <div className={styles.roleName}>Evaluator 1</div>
                                <div className={styles.roleName}>Evaluator 2</div>
                                <div className={styles.roleName}>Evaluator 3</div>
                                <div className={styles.roleName}>Evaluator 4</div>
                            </div>
                            {this.roleTable()}
                        </div>
                    </div>
            </div>
        )
    }
}

export default SearchMember;