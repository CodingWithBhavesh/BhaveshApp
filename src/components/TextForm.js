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

    const [lines, setLines] = useState([]);
    const [duplicates, setDuplicates] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [lineToRemove, setLineToRemove] = useState('');
  

    const findDuplicates = () => {
      const linesArray = text.split('\n');
      const seen = new Set();
      const duplicatesSet = new Set();
  
      linesArray.forEach(line => {
        if (seen.has(line)) {
          duplicatesSet.add(line);
        } else {
          seen.add(line);
        }
      });
  
      setLines(linesArray);
      setDuplicates(Array.from(duplicatesSet));
      setShowConfirmation(duplicatesSet.size > 0);
    };
  
    const handleRemoveDuplicate = () => {
      const filteredLines = lines.filter(line => line !== lineToRemove);
      setText(filteredLines.join('\n'));
      setShowConfirmation(false);
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

  // document.querySelector('.container').addEventListener('mouseenter', function() {
  //   const hoverText = this.querySelector('.hover-text');
  //   hoverText.style.visibility = 'visible';
  //   hoverText.style.opacity = '1';
    
  //   setTimeout(function() {
  //     hoverText.style.visibility = 'hidden';
  //     hoverText.style.opacity = '0';
  //   }, 3000); // 3000 milliseconds = 3 seconds
  // });
  



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
  // const button = document.getElementsByClassName ('button');
  //   const bbb=()=>{
    //     if(button!='disabled'){
//       button.style.backgroundColor ="red"
//     }
//     else{
//         button.style.backgroundColor ="pink"

//       }
//     }

// }
  // const userConfirmed = window.confirm("Do you want to proceed?");
  // if (userConfirmed) {
  //   console.log("User selected Yes");
  //   // Add your logic for Yes option here
  // } else {
  //   console.log("User selected No");
  //   // Add your logic for No option here
  // }
  
  let forCounting = 0.008*text.split(" ").filter((elemt)=>{ return elemt.length!==0 } ).length;
  let buttonStyle =()=>{
    return{
      color:props.mode==='light'?'black' : 'white',
    }
  }
  let textareaStyle=()=>{
    return{
      // color: 'brown    ',
      resize:"none",
      backgroundColor:props.mode==='light'?'white':'#515151',
      color:props.mode==='light'?'black':'white',

    }  
  }

  return (
    <>
      <div className=" forMobileDarkMode">
          <div className="img" onClick={props.toggleMode}>  </div>
              {/* <label className=" darkModeName form-check-label"   htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='light'?'black':'skyblue'}}><strong>{props.mode==='light'?'Enable Dark Mode':'Dark Mode Enabled'}</strong></label> */}
          </div>

{/*     <div className='container my-3' style={{color:{props.mode==='light'?'dark':'light'}}}>  ismaa color or any property drectly accept string value we should remove braces from it (unnecessary) */}
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
      <h1 className='mainheading' >{props.heading}</h1> {/* we can also use like that in all individiusll.. className={`text-${props.mode==='light'?'dark':'light'}`} it means agr modw light h to text-dark kr do vrna text-light kro {text-light,dark is property}*/}
        <div className="mb-3">
        <textarea spellCheck='false' style={textareaStyle()}   className='Form-control textArea' value={text} onChange={handleCombineChange} id='myBox'  rows='10' cols='100' ></textarea> 
         {/* we can use placeholder='Enter Text Here' but its color orashn krying */}
        </div>
        {/* style={{border:'1px solid white',color:props.mode==='light'?'blue':'white'}} ,style={{color:props.mode==='light'?'black':'white'}} */}
        <button  disabled={text.length===0}        style={buttonStyle()}    className=" button btn  btn-lg mx-2 my-1"           onClick={handleUpClick}>UPPERCASE</button>
        <button  disabled={text.length===0}        style={buttonStyle()}    className="button btn btn-lg mx-2 my-1"             onClick={handleUpClick2}>lowercase</button>
        <button  disabled={text.length===0}        style={buttonStyle()}    className="button btn btn-lg mx-2 my-1"             onClick={handleClear}>Clear Text</button>
        <button  disabled={text.length===0}        style={buttonStyle()}    className="button btn btn-lg mx-2 my-1"             onClick={handleCopy}>Copy text </button>
        <button  disabled={history.length === 0}   style={buttonStyle()}    className="button mobile-only btn btn-lg mx-2 my-1" onClick={handleUndo}> Undooooo </button>        
        <button  disabled={redoStack.length === 0} style={buttonStyle()}    className="button mobile-only btn btn-lg mx-2 my-1" onClick={handleRedo}> Redo</button>    
        <button  disabled={text.length===0}        style={buttonStyle()}    className="button btn btn-lg mx-2 my-1"             onClick={findDuplicates}>findDuplicates</button>
        {showConfirmation && (
        <div>
          <h3>Duplicate Lines Found:</h3>
          <ul>
            {duplicates.map((line, index) => (
              <li key={index}>
                {line} <button onClick={() => {
                  setLineToRemove(line);
                  handleRemoveDuplicate();
                }}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
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

      {/* <PlagiarismChecker/> */}
          

    </div>
    </>
  )
};
