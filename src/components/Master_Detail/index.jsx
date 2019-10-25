import React, { Component } from "react";
import classnames from "classnames";
import WarningMessage from "../WarningMessage";
import MasterDetailPage from "./MasterDetailPage";
import MasterDetailSideBarTab from "./MasterDetailSideBarTab";
import GreyAvatar from "../../images/GreyAvatar.svg";
import styles from "./masterdetail.module.css";
import CONSTANTS from "../../constants";

export default class Master_Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDisplayTabIndex: 0,
      masterDetailText: [
        {
          shortDescription: "",
          longDescription: "",
          title: "",
          id: 0,
          role: " ",
          WarningMessageOpen: false,
          WarningMessageText: ""
        }
      ]
    };
    this.handleDisplayTabClick = this.handleDisplayTabClick.bind(this);
    this.handleWarningClose = this.handleWarningClose.bind(this);
    this.fetchdata = this.fetchdata.bind(this);
    this.handleApply = this.handleApply.bind(this);
  }
  // Get the sample data from the back end
  
  componentDidMount() {
    this.fetchdata();
  }

  handleWarningClose() {
    this.setState({
      WarningMessageOpen: false,
      WarningMessageText: ""
    });
  }

  handleDisplayTabClick(id) {
    this.setState({ currentDisplayTabIndex: id });
  }
  fetchdata(){
    fetch(CONSTANTS.ENDPOINT.MASTERDETAIL)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(result => {
        this.setState({ masterDetailText: result });
        //console.log(this.state.masterDetailText);
        
      })
      .catch(error =>
        this.setState({
          WarningMessageOpen: true,
          WarningMessageText: `${
            CONSTANTS.ERROR_MESSAGE.MASTERDETAIL_GET
          } ${error}`
        })
      );
  }
  handleApply(roleplayer,id) {
    fetch(CONSTANTS.ENDPOINT.MASTERDETAIL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: roleplayer,
        id: id
      })
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(result =>{console.log("hello")})
      // )
        // this.setState(prevState => ({
        //   list: [result, ...prevState.list]
        // }))
      // )
      .catch(error => {console.log("err")});

      this.fetchdata();
      
  }

  render() {
    console.log(this.state.masterDetailText);
    
    const {
      masterDetailText,
      currentDisplayTabIndex,
      WarningMessageOpen,
      WarningMessageText
    } = this.state;
    return (
      <main id="mainContent">
        <div className="container-fluid">
          <div className="row">
            <div
              className={classnames(
                "col-2",
                "p-0",
                "border-right",
                styles.sidebar
              )}
            >
              <div className="list-group list-group-flush border-bottom">
                {masterDetailText.map((textAssets, index) => (
                  <MasterDetailSideBarTab
                    onDisplayTabClick={this.handleDisplayTabClick}
                    tabText={textAssets.title}
                    image={GreyAvatar}
                    index={index}
                    key={textAssets.id}
                  />
                ))}
              </div>
            </div>
            <MasterDetailPage
              textSampleData={masterDetailText[currentDisplayTabIndex]}
              onClickApply={this.handleApply}  
              id={this.state.currentDisplayTabIndex}
              role={this.state.masterDetailText[currentDisplayTabIndex].role}
            />
          </div>
        </div>
        <WarningMessage
          open={WarningMessageOpen}
          text={WarningMessageText}
          onWarningClose={this.handleWarningClose}
        />
      </main>
    );
  }
}
