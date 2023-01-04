import React from 'react'

function Bannerbig({bg,head,head3,color}) {
  return (
    <div style={{backgroundImage:`url("${bg}")`,textAlign:`${color}`, }} className="h-[450px] w-full bg-center bg-cover " >
        <div>
           
            <h1>{head}</h1>
            <h3>{head3}</h3>
        </div>
    </div>
  )
}

export default Bannerbig