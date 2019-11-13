import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import Bg from "./Bg";
import Profil from "./Profil/Profil";
import Summary from "./Summary/Summary";
import classnames from "classnames";
import styles from "../MiniComponents/miniComponents.module.sass"
import "./Side.sass"
import "../MiniComponents/common.sass"
let colors=["#772432","#004165","#CD202C","#F2DF74"]

let tab1=[true,false,false]
let tab2=[false,true,false]
let tab3=[false,false,true]
let all =[tab1,tab2,tab3]

let select =[-150,-50,50]
const Index = (props) => {
  const [tab, setTab] = useState(tab2);
  const [selectPos, setselectPos] = useState(-50);
  function handleTab(tabNo) {
    setTab(all[tabNo]);
    setselectPos(select[tabNo])
  }
  
  return (
      <div id="mainContent" 
      className={classnames( styles.side)}
      >
        <div className={"navigator_select"} style={{transform: `translate(0%,${selectPos}%)`}}/>
        <div className={"navigator"}>
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
        </div>
          {tab[0] ? <Profil/> : ""}
          {tab[1] ? <Bg/>: ""}
          {tab[2] ? <Summary/>: ""}
      </div>
  );
}

export default Index;