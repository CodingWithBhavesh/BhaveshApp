import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import DiceGame from './components/game';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
// import Nopage from './components/Nopage';





const App = () =>  {
  const [mode ,setMode] = useState('light');//wheather which mode is activated

  // const removeBgcolor =()=>{  
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }
  const toggleMode = (color)=>{
    // removeBgcolor();
    // document.body.classList.add('bg-'+color)
    if( mode === "light") {
      document.body.style.backgroundColor ='#2e2e2e'
      setMode('dark');
      showAlert("Dark mode enable sucessfully","success");
      document.title =  'TextTransformation - Dark';
      setInterval(() => {
        document.title =  'TextTransformation is amazing app';
      }, 2000);
      setInterval(() => {
        document.title =  'Install (bhavesh) My app';
      }, 1500);
;
    }
    else{ 
      document.body.style.backgroundColor ='white';
      setMode('light'); 
      showAlert("Light mode enable sucessfully","success")
      document.title =  'TextTransformation - Light'
      setInterval(() => {
        document.title =  'TextTransformation is amazing app'
      }, 2000);
      setInterval(() => {
        document.title =  'Install My app'
      }, 1500)
    }

  }

  const [alert,setAlert] = useState(null)// means initial value on alert is null

  const showAlert=(message , type)=>{
      setAlert({
        msg:message, //both name can same or different
        type:type
      } 
    )
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  


  


  return (

    <>
      <Navbar title="Bhavesh's App" components={'Clones'} aboutText={'About'} mode={mode} about={About} toggleMode={toggleMode} />
      <Alert alert={alert} toggleMode={toggleMode}/>
      

      <TextForm toggleMode={toggleMode} showAlert={showAlert} heading="Yha Nicha Daloo" mode={mode}/>

      <DiceGame/> 
 
      <About/>
    
    
    
    
    
 
   </>
  );
}


export default App;
{/* <Navbar title="Bhavesh's App" secondcomponents="About"/>  */}
{/* <Navbar/> */}
