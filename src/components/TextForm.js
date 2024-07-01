import React ,{useState} from 'react'



export default function TextForm(props) {
  const [text,setText] = useState('');
  // text="new test"wrong way to change state


  const handleUpClick = ()=>{
    // console.log('Uppercase was clicked' + text)
    let newText= text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase","success")
  }
  const handleUpClick2 =()=>{
    let newText=text.toLowerCase()
    setText(newText);
  } 
  const handleUpClick3 =()=>{
    let newText=text.toLocaleLowerCase()
    setText(newText);
  } 
  const handleClear =()=>{
    let newText= ' ';
    setText(newText);
  }

  // const handleUpClick4 =()=>{
  //   // let newText=text.usingstr();
  //   setText(newText);
  // } 

  // var str1={text};
  // function usingstr() {
    //   let slices= str1.slice(1,4)
    //   console.log(slices)
    // }
  // usingstr();
  


  const handleOnChange =(event)=>{
    // console.log('On Change');
    setText(event.target.value)
  }

// tryy
  // const afunction = ()=>{
  //   text.split(" ").filter((elemt)=>{ return elemt.length!==0} )
  //   returrn
  // }

  return (
    <>
{/*     <div className='container my-3' style={{color:{props.mode==='light'?'dark':'light'}}}>  ismaa color or any property drectly accept string value we should remove braces from it (unnecessary) */}
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
      <h2 >{props.heading}</h2> {/* we can also use like that in all individiusll.. className={`text-${props.mode==='light'?'dark':'light'}`} it means agr modw light h to text-dark kr do vrna text-light kro {text-light,dark is property}
      */}
        {/* <div className="mb-3"> */}
        <textarea style={{backgroundColor:props.mode==='light'?'white':'rgb(23 13 109)', color:props.mode==='light'?'black':'white'}}   className={`Form-control`} value={text} onChange={handleOnChange} id='myBox'  rows='10' cols={100} ></textarea>  {/* we can use placeholder='Enter Text Here' but its color orashn krying */}
        </div>
        <button   className="btn btn-sm btn-outline-primary mx-1 my-1" onClick={handleUpClick}>ToUpperCase</button>
        <button   className="btn btn-sm btn-outline-primary mx-1 my-1" onClick={handleUpClick2}>ToLowerCase</button>
        <button   className="btn btn-sm btn-outline-primary mx-1 my-1" onClick={handleUpClick3}>ToNothing</button>
        <button   className="btn btn-sm btn-outline-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
    {/* </div> */}
    <div className="container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
      <h2 >More Information about text above</h2>
      <p > {text.split(" ").filter((elemt)=>{ return elemt.length!==0 } ).length} Words AND {text.length} Characters</p>
      {/* filter function is uded to extract only those elements fro list or collecton that satidfy specoific condition like the function above */}
      <p>{0.008*text.split(" ").filter((elemt)=>{ return elemt.length!==0 } ).length} Minutes take to read this.</p>
    </div>
    <div className="container my-1" style={{color:props.mode==='light'?'black':'white'}}>
      <h3 >Preview</h3>
      <p >{text.length>0?text:"Enter something to get preview(In box above )"}</p>
    </div>
    </>
  )
}
