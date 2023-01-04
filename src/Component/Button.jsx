import React from 'react'

function Button({btn,text,p,bg}) {
  return (
    <div>
        <button style={{color:`${text}`,padding:`${p} `,background:`${bg}`}}>{btn}</button>
    </div>
  )
}

export default Button