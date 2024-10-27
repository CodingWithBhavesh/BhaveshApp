import React from 'react'

 const About = (props) =>{
  return (
    <div className='Full-about'>
    <div className='container' >
    <h1>About US</h1>
    <div className="container">
    <div>
        <div className  ="accordion" id="accordionPanelsStayOpenExample"  >
  <div className  ="accordion-item" style={{backgroundColor:props.mode==='light'?'black':'white'}}>
    <h2 className  ="accordion-header">
      <button className  ="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className  ="accordion-collapse collapse show">
      <div className  ="accordion-body">
        <strong>This is the first item's accordion body.</strong> 
      </div>
    </div>
  </div>
  <div className  ="accordion-item">
    <h2 className  ="accordion-header">
      <button className  ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className  ="accordion-collapse collapse">
      <div className  ="accordion-body">
        <strong>This is the second item's accordion body.</strong> 
      </div>
    </div>
  </div>
  <div className  ="accordion-item">
    <h2 className  ="accordion-header">
      <button className  ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className  ="accordion-collapse collapse">
      <div className  ="accordion-body">
        <strong>This is the third item's accordion body.</strong> 
      </div>
    </div>
  </div>
</div>
</div>
      
    </div>
    </div>
    </div>
  )
};
export default About;
