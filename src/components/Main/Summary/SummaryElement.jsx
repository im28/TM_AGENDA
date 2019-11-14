import React ,{ useState }from 'react'

export default function SummaryElement(props) {
    const [row] = useState(props.row);
    const [column] = useState(props.column);

    return (
        <div style={{  margin: "0",gridColumnStart:column ,gridRowStart:  row,color:props.color}} className= { "summaryitem"} >
                <i className="fas fa-circle" style={{  paddingRight:"1rem" }} ></i>
                <span style={{  paddingRight:"0rem" }}>
                    {props.name}
                </span>
                <div className="progressBar" style={{  marginLeft: "auto"}}>
                    <div  className="progressBar" style={{  background: props.color ,position:"absolute",minWidth: "3rem" }}/ >
                </div>
                <span style={{  paddingLeft:"1rem" }}>
                    {"4x"}
                </span>
        </div>
    )
}
