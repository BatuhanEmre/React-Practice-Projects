import React from 'react'

function Accordion({title,active,setActive}) {
  return (
    <div className='accordion'>
        
    <div className='accordionHeading'> 
    
    <div className='container'>
        <p> {title} </p>
        <span onClick={() => setActive(title)}> CLİCK ME!</span>

    </div>
    
    </div>

    <div className={(active===title ? "show" : "")+"accordionContent"} >

        <div className='container'>
            <p>Lorem ipsum sit amet ab alias reqiues</p>
        </div>

    </div>
        
     </div>
  )
}

export default Accordion