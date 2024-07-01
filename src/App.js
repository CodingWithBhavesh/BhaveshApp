import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/about';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";





function App() {
  const [mode ,setMode] = useState('light');//wheather whic mode is activated

  const toggleMode = ()=>{
    if( mode === "light") {
      document.body.style.backgroundColor ='rgb(4 7 79)'
      setMode('dark')
      showAlert("Dark mode enable sucessffully","success")
      document.title =  'TextTransformation - Dark'
      setInterval(() => {
        document.title =  'TextTransformation is amazing app'
      }, 2000);
      setInterval(() => {
        document.title =  'Install My app'
      }, 1500);
;
    }
    else{
      document.body.style.backgroundColor ='white';
      setMode('light'); 
      showAlert("Light mode enable sucessffully","success")
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
    }, 2000);
  }





  return (
    <>
    {/* <Navbar title="Bhavesh's App" secondcomponents="About"/>  */}
    {/* <Navbar/> */}
   <Navbar title="Bhavesh's App" components={'Clones'} mode={mode} toggleMode={toggleMode}  /> 
   {/* <About/> */}
   <Alert alert={alert}> </Alert>
   <div className="container">
   
   <TextForm showAlert={showAlert} heading="Yha Nicha Daloo" mode={mode}/> 
   </div>


   </>
  );
}


export default App;
