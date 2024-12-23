import React from "react"; 
import PropTypes from "prop-types";

const Navbar =(props) =>{
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary`} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/BhaveshApp">  {props.title} </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  ria-expanded="false"  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
              <li className="nav-item">
              <button className="nav-link" onClick={() => props.switchView('TextForm')}>Text Form</button>
              </li>
              <li className="nav-item">
              <button className="nav-link" onClick={() => props.switchView('DiceGame')}>Dice Game</button>
              </li>
              <li className="nav-item">
              <button className="nav-link" onClick={() => props.switchView('About')}>About</button>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="https://codingwithbhavesh.github.io/Lock_information/" target="_blank">LockInfo</a>
              </li>
            </ul>
            {/* <button className="btn btn-primary mx-2" onClick={() => props.switchView('TextForm')}>Text Form</button>
            <button className="btn btn-primary mx-2" onClick={() => props.switchView('DiceGame')}>Dice Game</button>
            <button className="btn btn-primary mx-2" onClick={() => props.switchView('About')}>About</button> */}

            
          <div className="d-flex">
              <div className="img hover" onClick={props.toggleMode}></div>
              <label className=" darkModeName form-check-label"   htmlFor="flexprops.switchCheckDefault" style={{color:props.mode==='light'?'black':'skyblue'}}>
                <div className="hover"><strong>{props.mode==='light'?'Enable Dark Mode':'Dark Mode Enabled'}</strong></div>
              </label>
                
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
};
export default Navbar;

Navbar.propTypes = { title: PropTypes.string.isRequired };

// Navbar.defaultProps = {
//   title: "Helloo",
//   secondcomponents: "default secondcomponents",
// };
