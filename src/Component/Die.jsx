import React from 'react'

export default function Die({value,isHeld,onClick}) {
  
  const styles={
    backgroundColor:isHeld?'green':'white'
  }
  return (
    <div className='each-item'
   onClick={onClick}
    style={styles}>
      <h1>{value} </h1>
    </div>
  )
}
