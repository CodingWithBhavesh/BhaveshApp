import React  from 'react'

export default function Alert(props) {
  const capatalise =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }


  return (
    /* there is an new syntext we use it because itailly alert is null so it  not read */
    <div style={{height:'43px'}}>
        { props.alert && <div className="alert show" style={{backgroundColor:props.mode==='light'?'red':'#515151' ,color:props.mode==='light'?'black':'white'}}  role="alert">
           {capatalise(props.alert.type)} : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
        </div>
  ) 
}
