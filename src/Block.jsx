import React from 'react'
import './app.css';

const Block = ({value ,blockClick}) => {
  return (
    <div onClick={()=> blockClick()} className='block'>{value} </div>
  )
}

export default Block