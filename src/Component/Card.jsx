import React from 'react'
import Button from './Button'

function Card({bgc,w,h}) {
  return (
 
      <div className="bg-cover bg-center" style={{backgroundImage:`url(${bgc})`,width:`${w}`,height:`${h}`}}>
        
        </div>

  
  )
}

export default Card