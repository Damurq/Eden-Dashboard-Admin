import React from 'react'
import "./TopBar.css"

const TopBar = ({section}) => {
  return (
    <div className='top-bar'>
        <div className="">
            {section}
        </div>
        <div className="">
            
        </div>
    </div>
  )
}

export default TopBar