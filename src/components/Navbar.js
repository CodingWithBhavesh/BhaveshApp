import React from "react"; 
import PropTypes from "prop-types";
// import About from '/components/About';
// import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary`} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/Text-Converter/">  {props.title} </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  ria-expanded="false"  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link " aria-current="page" href='/About'>{props.aboutText}</a> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">{props.components}</a>
              </li>
            </ul>

        {/* <div className="container1">
            <div className="hover-text" style={{color:props.mode==='light'?'black':'white'}}> Click here to enter dark or light</div>
            </div> */}
            
          <div className="d-flex">
              <div className="img" onClick={props.toggleMode}></div>
              <label className=" darkModeName form-check-label"   htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='light'?'black':'skyblue'}}><strong>{props.mode==='light'?'Enable Dark Mode':'Dark Mode Enabled'}</strong></label>
                
            </div>
          </div>
        </div>
        
      </nav>
      {/* </div> */}
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
              {/* <div className="bg-primary  mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
              <div className="bg-success  mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
              <div className="bg-warning  mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
              <div className="bg-danger  mx-2"  onClick={()=>{props.toggleMode('danger')}}  style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
              <div className="bg-light  mx-2"  onClick={()=>{props.toggleMode('light')}}  style={{height:'30px',width:'30px',cursor:'pointer',border:'0.1px solid black'}}></div> 
              <div className="bg-dark  mx-2"  onClick={()=>{props.toggleMode('blue')}}  style={{height:'30px',width:'30px',cursor:'pointer', border:'1px solid white'}}></div>  */}




      
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

// Navbar.defaultProps = {
//   title: "Helloo",
//   secondcomponents: "default secondcomponents",
// };
