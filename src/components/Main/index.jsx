import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import Bg from "./Bg";
import Profil from "./Profil/Profil";
import Summary from "./Summary/Summary";
import classnames from "classnames";
import styles from "../MiniComponents/miniComponents.module.sass"
import "./Side.sass"
import "../MiniComponents/common.sass"
// let colors=["#772432","#004165","#CD202C","#F2DF74"]

let tab1=[true,false,false,false]
let tab2=[false,true,false,false]
let tab3=[false,false,true,false]
let tab4=[false,false,false,true]
let all =[tab1,tab2,tab3,tab4]

let select =[-150,-50,50,150]
let admin = true;
let h = [-150,-54,35,130]
const Index = (props) => {
  const [tab, setTab] = useState(tab2);
  const [selectPos, setselectPos] = useState(admin ? h[1] : select[1]);
  function handleTab(tabNo) {
    setTab(all[tabNo]);
    if (admin) {
      
      setselectPos(h[tabNo])
    }
    else{
      setselectPos(select[tabNo])
    }
  }
  
  let styleSelect={}
  let styleNavigator={}
  if (admin) {
    styleSelect={
      transform: `translate(0%,${selectPos}%)`,
      top:"40.5%"
    }
    styleNavigator={
      top:"40.5%"
    }
  }
  else{
    styleSelect={
      transform: `translate(0%,${selectPos}%)`,
    }
  }
  return (
      <div id="mainContent" 
      className={classnames( styles.side)}
      >
        <div className={"navigator_select"} style={styleSelect}/>
        <div className={"navigator"}  style={styleNavigator}>
          <div onClick={()=>(handleTab(0))} 
          className={classnames(tab[0] ? "TMblue" : "gray","navigator_icon")} >
            {/* <i className="fas fa-calendar-alt"></i> */}
            <p style={{fontSize:"2vmin"}} className={"navigator_tag"}>You</p>
          </div>
          <div onClick={()=>(handleTab(1))} 
          className={classnames(tab[1] ? "TMblue" : "gray","navigator_icon")}>
            <i className="fas fa-calendar-alt"></i>
            <p style={{fontSize:"2vmin"}} className={"navigator_tag"}>Next Week</p>
          </div>
          <div onClick={()=>(handleTab(2))} className={classnames(tab[2] ? "TMblue" : "gray","navigator_icon")}>
            <i className="fas fa-book-open"></i>
            <p style={{fontSize:"2vmin"}} className={"navigator_tag"}>Summary</p>
          </div>
          {
            admin &&
            <div onClick={()=>(handleTab(3))} className={classnames(tab[2] ? "TMblue" : "gray","navigator_icon")}>
              <i className="fas fa-book-open"></i>
              <p style={{fontSize:"2vmin"}} className={"navigator_tag"}>Summary</p>
            </div>
          }
          
        </div>
          {tab[0] ? <Profil/> : ""}
          {tab[1] ? <Bg/>: ""}
          {tab[2] ? <Summary/>: ""}
          {tab[3] && admin ? <Summary/>: ""}
      </div>
  );
}

export default Index;