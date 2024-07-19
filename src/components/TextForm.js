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
      props.showAlert("Converted to LowerCase","success");
    } 
    
    
    const handleClear =()=>{
      warningClear(); 
      let newText= ' ';
      setText(newText);
      props.showAlert("Clear text Successfully","success");
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert('Text Copied;','sucess')
  }



  // function TextAreaWithUndoRedo() {
    // const [text, setText] = useState("");
    // for redo and undo
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
  
    const handleChange = (event) => {
      // Save current text to history
      setHistory([...history, text]);
      setRedoStack([]); // Clear the redo stack when new changes are made
      setText(event.target.value);
    };
  
    const handleUndo = () => {
      if (history.length > 0) {
        const previousState = history[history.length - 1];
        setRedoStack([text, ...redoStack]); // Save current text to redo stack
        setText(previousState);
        setHistory(history.slice(0, -1)); // Remove last entry from history
      }
    };
  
    const handleRedo = () => {
      if (redoStack.length > 0) {
        const nextState = redoStack[0];
        setHistory([...history, text]); // Save current text to history
        setText(nextState);
        setRedoStack(redoStack.slice(1)); // Remove first entry from redo stack
      }
    };
    const handleCombineChange=(event)=>{
      handleChange(event);
      handleOnChange(event);

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

  
// used in clear text
  const warningClear =()=>{
    if(text.length>0){
        alert(`WARNING:Are you sure,you wanted to clear text.`)
    }
  }
  


  const handleOnChange =(event)=>{
    // console.log('On Change');
    setText(event.target.value)
  }



// const StyledButton = ({ disabled }) => {
//   const commonStyles = {
//     backgroundColor: 'blue',
//     color: 'white',
//     border: 'none',
//     padding: '10px 20px',
//     cursor: disabled ? 'not-allowed' : 'pointer',
//     opacity: disabled ? 0.5 : 1,
//   };

// tryy
  // const afunction = ()=>{
  //   text.split(" ").filter((elemt)=>{ return elemt.length!==0} )
  //   returrn
  // }
  let forCounting = 0.008*text.split(" ").filter((elemt)=>{ return elemt.length!==0 } ).length;
  

  return (
    <>
{/*     <div className='container my-3' style={{color:{props.mode==='light'?'dark':'light'}}}>  ismaa color or any property drectly accept string value we should remove braces from it (unnecessary) */}
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
      <h2 className='mainheading' >{props.heading}</h2> {/* we can also use like that in all individiusll.. className={`text-${props.mode==='light'?'dark':'light'}`} it means agr modw light h to text-dark kr do vrna text-light kro {text-light,dark is property}*/}
        <div className="mb-3">
        <textarea spellCheck='false' style={{resize:"none",backgroundColor:props.mode==='light'?'white':'#515151', color:props.mode==='light'?'black':'white'}}   className='Form-control textArea' value={text} onChange={handleCombineChange} id='myBox'  rows='10' cols='100' ></textarea> 
         {/* we can use placeholder='Enter Text Here' but its color orashn krying */}
        </div>
        {/* style={{border:'1px solid white',color:props.mode==='light'?'blue':'white'}}  */}
        <button  disabled={text.length===0}          className=" button btn  btn-lg mx-3 my-1"           onClick={handleUpClick}>UPPERCASE</button>
        <button  disabled={text.length===0}          className="button btn btn-lg mx-3 my-1"            onClick={handleUpClick2}>lowercase</button>
        <button  disabled={text.length===0}          className="button btn btn-lg mx-3 my-1"            onClick={handleClear}>Clear Text</button>
        <button  disabled={text.length===0}          className="button btn btn-lg mx-3 my-1"            onClick={handleCopy}>Copy text </button>
        <button  disabled={history.length === 0}     className="button mobile-only btn btn-lg mx-3 my-1" onClick={handleUndo}> Undo </button>        
        <button  disabled={redoStack.length === 0}   className="button mobile-only btn btn-lg mx-3 my-1" onClick={handleRedo}> Redo</button>    
        </div>
    <div className="container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
      <h2 className='heading-moreinf' >More Information about text above</h2>
      <p className='moreinf'> {text.split(/\s/).filter((elemt)=>{ return elemt.length!==0 } ).length} Words AND {text.length} Characters
      {/* filter function is uded to extract only those elements fro list or collecton that satidfy specoific condition like the function above */}
      {/* {forCounting variable is defned above} thats is 0.008*text.split(" ").filter((elemt)=>{ return elemt.length!==0 } ).length */} | {forCounting} Minutes and {forCounting*60} Second take to read this.</p>
    </div>
    <div className="container my-1" style={{color:props.mode==='light'?'black':'white'}}>
      <h3 id='preview' >Preview</h3>
      <p id='preview-msg' >{text.length>0?text:"Enter something to get preview(In box above )"}</p>
    </div>
    </>
  )
};
