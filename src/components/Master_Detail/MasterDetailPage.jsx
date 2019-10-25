import React, { Component } from "react";
import classnames from "classnames";
import styles from "./masterdetail.module.css";
import { Dropdown,DropdownButton } from "react-bootstrap";

export default class MasterDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longDescription: this.props.textSampleData.longDescription,
      title:  this.props.textSampleData.title,
      onClickApply:this.props.onClickApply,
      rolePlayer:"Select Role Player"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRole = this.handleRole.bind(this);
  }

  handleChange() {
    console.log(this.state.rolePlayer);
    if (this.state.rolePlayer !== "Select Role Player") {
      
      this.props.onClickApply(this.state.rolePlayer,this.props.id+1);
    }
    console.log(this.props.role);
  }
  handleRole(event){ 
    this.setState({rolePlayer: event});
  }

  render(){

  
    return (
      <div className="col">
        <div className={classnames("row", styles.heading)}>
          <div className="col">
            <h3 className="ml-3 mb-4">{this.props.textSampleData.title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">
          </div>
          <div className="col-md-8 col-8 ml-3 mb-2">

            <p>{this.props.role}</p>
          </div>
          
          <div className="col-md-8 col-12 ml-3 mb-5">
          <DropdownButton title={this.state.rolePlayer} onSelect={(e)=>this.handleRole(e)}>
            <Dropdown.Item eventKey="Ibrahim">Ibrahim</Dropdown.Item>
            <Dropdown.Item eventKey="Faris">Faris</Dropdown.Item>
            <Dropdown.Item eventKey="Luqman">Luqman</Dropdown.Item>
          </DropdownButton>
          
            
          <button
              onClick={() => this.handleChange(this.state.rolePlayer)}
              type="button"
              className={classnames(
                "btn btn-primary"
              )}
            >Apply</button>
            <div className="col-12 mt-3">
            </div>
            <p className={styles.title}>Description</p>
            <p>{this.props.textSampleData.longDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
