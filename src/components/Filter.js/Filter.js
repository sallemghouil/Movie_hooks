import React from 'react'

const Filter = ({setsearch,setsearchR}) => {
  return (
    <div><input type="text" placeholder="search by name" onChange={(e)=>setsearch(e.target.value)}/>
    <input type="number" placeholder="search by rate" onChange={(e)=>setsearchR(e.target.value)}/>

    
    </div>
  )
}

export default Filter