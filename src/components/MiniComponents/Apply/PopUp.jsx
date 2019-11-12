import React, { useState,useEffect } from 'react';
import "./PopUp.sass"
import CustomButton from "../CustomButton"
import CustomButtonBig from "../CustomButtonBig"
import classnames from "classnames";

const PopUp = (props) => {
    const [height, setheight] = useState(80);
    const [inputfeild, setinputfeild] = useState(0);
    const [fininshed, setFininshed] = useState(false);

    let modalHeight = [80,60,55]
    function handleClick(){
        setinputfeild(inputfeild + 1);
        setheight(modalHeight[inputfeild+1])
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          props.open();
        }, 4000);
        return () => clearTimeout(timer);
      }, [fininshed]);

    function handleClickBack(){
        setinputfeild(inputfeild - 1);
        setheight(modalHeight[inputfeild-1])
        if (inputfeild===2) {
            // setFininshed(true);
        }
    }
    
    return(
    <div className={classnames("containerPopUp",inputfeild===2 ? "fade" : "")} >
        <div className={"blur"} onClick={props.open}></div>
        <div className={"background"}  style={{backgroundColor: props.background}} style={{height: `${height}vh`}}>
            <div className={"date"}>MONDAY 15TH OCTOBER</div>
            <div className={"roleName"}>{props.title}</div>
            <i className={classnames("icon",props.icon)} 
                style={{fontSize: "5.5rem",
                        margin: "3rem 0 4rem 0",}}
            />

            {(props.inputElements && inputfeild === 0)&&  
                    props.inputElements.map((element,index)=>
                        <input type="text" 
                        name={element} 
                        key={element+index }
                        placeholder={element}
                        className="inputPopUp" 
                        id=""/>
                    ) 
            }
            {(inputfeild !== 2)&&
                <CustomButtonBig 
                value= {`Apply  `}
                value1= { (inputfeild === 1) && <i className="far fa-check-circle" style={{fontSize: "2rem",transform: `translate(2rem,15%)`}}></i>}
                style={{
                    lineHeight: "2rem",
                    margin: "auto 0 auto 0",
                    left: "0",
                    transform: `translate(0)`,
                    position: "relative"
                    }}
                color= {props.colorname}
                onClick={handleClick}
                />
            }
            {(inputfeild === 1)&& 
                <CustomButton 
                value="Back" 
                style={{
                    marginBottom: "auto",}}
                color= {props.colorname}
                onClick={handleClickBack}
                />
            }
            {(inputfeild === 2)&&
                <div className={"roleName"} style={{marginBottom: "5rem"}}>
                    Confirmed <i className="far fa-check-circle"></i>
                </div>
            }
        </div>   
    </div>
)};

export default PopUp;