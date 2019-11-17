import React, {Component} from 'react';
import styles from "./ministyles.module.sass"

class AddMemberModal extends Component{
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }
    onBack(){
        this.props.back(true)
    }
    render(){
        if (!this.props.show){
            return null;
        }
        return(
            <div className={ styles.container} >
                <div className={ styles.blur}></div>
                <div className={ styles.background} >
                    <div className={ styles.newMemberTxt}>New Member</div>
                    <div className={ styles.addNewMemberTxt}>Add the New Member Details</div>
                    <input className={ styles.nameTxt} placeholder="NAME"/>
                    <input className={ styles.usernameTxt} placeholder="USER NAME"/>
                    <input className={ styles.passwordTxt} placeholder="PASSWORD"/>
                    <button className={ styles.btnConfirm} onClick={(e) => {this.onClose(e)}}>Confirm</button>
                    <button className={ styles.btnBack} onClick={this.onBack.bind(this)}>Back</button>
                </div>   
            </div>
        )
    }
}

export default AddMemberModal;