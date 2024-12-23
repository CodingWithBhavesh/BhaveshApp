import React from "react";

const About = (props) => {
  return (
    <div className="Full-about">
      <div className="container">
        <h1>About US</h1>
        <div className="container">
          <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div
                className="accordion-item"
                style={{
                  backgroundColor: props.mode === "light" ? "black" : "white",
                }}
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    My MESSAGE FOR U
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    <strong>Hey this is me</strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    My info
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                > 
                  <div className="accordion-body">
                    <strong>My name is BHAVESH.</strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    My hapiness
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <strong>
                      I dedicate all hapiness to my faimly and my bestt friend
                      KHUSHI❤️😍💕.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Contact us
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <a href="https://wa.me/919817100103" target="_blank"  style={{ color: 'blue', textDecoration: 'none',fontSize:'1.3rem' }}>
                      Message us on WhatsApp
                    </a>
                    <br/>
                  </div>
                </div>
                
              </div>
              <div className="my-3">
              <strong style={{fontSize:"1.6rem"}}>To Visit our new website :</strong> 
              <a  href="https://codingwithbhavesh.github.io/Lock_information/"  target="_blank"  style={{ color: 'blue', textDecoration: 'none' }}> CLICK HERE</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
