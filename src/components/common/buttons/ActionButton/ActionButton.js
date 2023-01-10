import React from 'react'
import "./ActionButton.css"

const ActionButton = ({className, type, size, children , onClick}) => {
  return (
    <button onClick={onClick} className={`${className} button--${type} button--${size}`}>{children}</button>
  )
}

export default ActionButton