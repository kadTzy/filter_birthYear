import React from 'react'
import './Filter.css'

const Filter = (props) => {

  

    const newfilter = props.user.filter((el)=>{ 
        return el.date === props.value
    })
  return (
    <div className='filter_div'>
        
   </div>
  )
}

export default Filter
