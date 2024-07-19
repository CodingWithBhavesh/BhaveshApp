import React from 'react'

export default function Nopage(props) {
  return (
    <div>
        <h1 style={{color:props.mode==='light'?'black':'blue'}}>Oopps!Page not found</h1>
      
    </div>
  )
}
