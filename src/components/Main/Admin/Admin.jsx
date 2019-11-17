import React, {Component} from 'react';
import styles from "./admin.module.sass";
import SearchMember from "./SearchMember"
import PopUp from "../../MiniComponents/Apply/PopUp";
// import Select from 'react-select';

let colors=["#772432","#004165","#CD202C","#F2DF74"]
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

class Admin extends Component{
    // constructor(props) {
    //     super(props);
    // }

    state = {
        searchPage: false,
        addMemberPage: false,
        adminConfirmed: false,
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        currentDate: new Date().getDate(),
        dateOne: "",
        dateTwo: "",
        dateThree: "",
        month: ["January","February","Mac","April","May","Jun",
        "July","August","September","October","November","December"],
        dateIndex: [0,1,2,3,4,5,6,7,8,9,10,11],
        competedRoles: [],
        meetingDate: [],
        currentIndex: 0,
        inputElements: ["Name", "User Name", "Password"]
    }

    componentDidMount() {
        
    }

    componentWillUnmount(){
        //this.dateConverter()
    }

    next = () => {
        var size = this.state.meetingDate.length

        if(size<4){
            return null;
        } 

        if(this.state.dateThree === this.state.meetingDate[size - 1]){
            return null;
        }
        else{
            this.setState({
                dateOne: this.state.meetingDate[this.state.currentIndex],
                dateTwo: this.state.meetingDate[this.state.currentIndex + 1],
                dateThree:this.state.meetingDate[this.state.currentIndex + 2],
                currentIndex: this.state.currentIndex + 1
            })
        }
    }

    previous = () => {
        if(this.state.dateOne === this.state.meetingDate[0]){
            return null;
        }
        else{
            this.setState({
                dateOne: this.state.meetingDate[this.state.currentIndex - 2],
                dateTwo: this.state.meetingDate[this.state.currentIndex - 1],
                dateThree:this.state.meetingDate[this.state.currentIndex],
                currentIndex: this.state.currentIndex - 1
            })
        }
    }

    dateConverter =  (date) => {
        let newDate = date.split(" ");
        let completeDate = newDate[2] + " " + newDate[1] + " " + newDate[3]

        let check = completeDate.split(" ")
        if(check[0] === "undefined") completeDate = "Null"

        return completeDate
    }

    veiwDate(){
        var meetingDate = []
        for(var i = 0;i<this.state.competedRoles.length;i++){
            var check = true
            if(meetingDate.length<0){
                meetingDate.push(this.state.competedRoles[i].expiryDate.date)
            }else{
                for(var x = 0;x<meetingDate.length;x++){
                    if(meetingDate[x] === this.state.competedRoles[i].expiryDate.date){
                        check = false
                    }
                }
                if(check){
                    meetingDate.push(this.state.competedRoles[i].expiryDate.date)
                }
            }
        }

        meetingDate.sort(function(a,b){
            return new Date(a) - new Date(b)
        })
        console.log("Number: " + meetingDate.length)
        if(meetingDate.length===1){
            this.setState({
                dateOne: meetingDate[0],
            })
        }
        else if(meetingDate.length===2){
            this.setState({
                dateOne: meetingDate[0],
                dateTwo: meetingDate[1]
            })
        }
        else if(meetingDate.length>2){
            this.setState({
                dateOne: meetingDate[0],
                dateTwo: meetingDate[1],
                dateThree: meetingDate[2]
            })
        }

        this.setState({
            meetingDate: meetingDate,
            currentIndex: 0
        })

    }

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    openPage = modal => () => {
        if(modal === "SearchPage"){
            this.setState({
                searchPage: true,
                addMemberPage: false,
                adminConfirmed: false
            })
        }
        else if(modal === "AddMemberPage"){
            this.setState({
                addMemberPage: true,
                searchPage: false,
                adminConfirmed: false
            })
        }
        else if(modal === "AdminConfirm"){
            this.setState({
                adminConfirmed: true,
                searchPage: false,
                addMemberPage: false
            })
        }  
        else if(modal === "ClosePage"){
            this.setState({
                searchPage: false,
                addMemberPage: false,
                adminConfirmed: false
            })
        }    
    }

    getValueDropDown = (event) =>{
        this.setState({
            currentDate: 2,
            currentMonth: this.state.dateIndex[event.target.value] ,
            dateOne: 1 + " " + this.state.month[event.target.value],
            dateTwo: 2  + " " + this.state.month[event.target.value],
            dateThree: 3 + " " + this.state.month[event.target.value],
        })
    }

    dateDropDown = () => {
        const doubled = this.state.month.map((number, index) => {
            var temp = this.state.month[index].substring(0, 3);
            if(temp === this.state.currentMonth){
                return <option key={index} selected value={index}>{this.state.month[index]}</option>
            }
            else{
                return <option key={index} value={index}>{this.state.month[index]}</option>
            }
        });

        return(
            <select className={styles.dateDropDown} onChange={this.getValueDropDown}>
                {doubled}
            </select>
        )
    }




    refreshColumnOne = () => {
        //this.fetchRoles(this.dateConverter("Fri Nov 08 2019"))
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

        for(var i = 0;i<14;i++){
            for(var x = 0; x<this.state.competedRoles.length;x++){
                if(this.state.dateOne === this.state.competedRoles[x].expiryDate.date){
                    if(roles[i]===this.state.competedRoles[x].roleName){
                        array[i]=this.state.competedRoles[x].owner.information.firstname
                    }
                }
                
            }
        }
        
        const doubled = array.map((roleName) => {
            return <div key={count++} className={styles.roleName}>{roleName}</div>

         });

        return(
            <div className={styles.recordOne}>
                {doubled}
            </div>
        )
    }

    refreshColumnTwo = () => {
        //this.fetchRoles(this.dateConverter("Fri Nov 08 2019"))
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

        for(var i = 0;i<14;i++){
            for(var x = 0; x<this.state.competedRoles.length;x++){
                if(this.state.dateTwo === this.state.competedRoles[x].expiryDate.date){
                    if(roles[i]===this.state.competedRoles[x].roleName){
                        array[i]=this.state.competedRoles[x].owner.information.firstname
                    }
                }
                
            }
        }
        
        const doubled = array.map((roleName) => {
            return <div key={count++} className={styles.roleName}>{roleName}</div>

         });

        return(
            <div className={styles.recordTwo}>
                {doubled}
            </div>
        )
    }
    refreshColumnThree = () => {
        //this.fetchRoles(this.dateConverter("Fri Nov 08 2019"))
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

        for(var i = 0;i<14;i++){
            for(var x = 0; x<this.state.competedRoles.length;x++){
                if(this.state.dateThree === this.state.competedRoles[x].expiryDate.date){
                    if(roles[i]===this.state.competedRoles[x].roleName){
                        array[i]=this.state.competedRoles[x].owner.information.firstname
                    }
                }
                
            }
        }
        
        const doubled = array.map((roleName) => {
            return <div key={count++} className={styles.roleName}>{roleName}</div>

         });

        return(
            <div className={styles.recordThree}>
                {doubled}
            </div>
        )
    }

    render(){
        // if (!this.props.show){
        //     return null;
        // }

        return(
            <div>
                <div className={styles.animateTop}>
                    <div className={styles.background}>
                        <button className={styles.searchBar} onClick={this.openPage("SearchPage")}>Search Member</button>
                        <button className={styles.addMemberBtn} onClick={this.openPage("AddMemberPage")}>Add Member +</button>
                        {this.dateDropDown()}
                        <div className={styles.dateContainer}>
                            <div className={styles.dateOne}>
                                
                                <div className={styles.selectingDate}>{this.dateConverter(this.state.dateOne)}</div>
                                <button className={styles.dateBtnLeft} onClick={this.previous}></button>
                            </div>
                            <div className={styles.dateTwo}>
                                <div className={styles.selectingDate}>{this.dateConverter(this.state.dateTwo)}</div>
                            </div>
                            <div className={styles.dateThree}>
                                <div className={styles.selectingDate}>{this.dateConverter(this.state.dateThree)}</div>
                                <button className={styles.dateBtnRight} onClick={this.next}></button>
                            </div>
                        </div>
                        <div className={styles.roleTitle}>Roles</div>
                        <div className={styles.rolePlayer}>Roles Player</div>
                        <div className={styles.tableContainer}>
                            <div className={styles.nameContainer}>
                                {/* {this.refreshColumnOne()}
                                {this.refreshColumnTwo()}
                                {this.refreshColumnThree()} */}
                            </div>
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
                        </div>
                    </div>
                </div>
                <SearchMember
                    show= {this.state.searchPage}
                    onClose={this.openPage("ClosePage")}
                />
                {/* <AddMemberModal
                    show= {this.state.addMemberPage}
                    onClose={this.openPage("AdminConfirm")}
                    back={this.openPage("ClosePage")}
                /> */}
                { this.state.addMemberPage &&
                    <PopUp
                        open={this.openPage("ClosePage")}
                        title= {"Add the New Member Details"}
                        date={"New Member"}
                        icon={"fas fa-plus-circle"}
                        hasTextInput={true}
                        inputElements ={this.state.inputElements}
                        background = {colors[1]}
                        colorname = {"TMblue"}
                    />
                }
               
            </div>
        )
    }
}

export default Admin;