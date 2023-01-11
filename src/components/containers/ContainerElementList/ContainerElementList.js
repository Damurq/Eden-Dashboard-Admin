import React from 'react'

const ContainerElementList = ({title, children}) => {
  return (
    <div>
        <h2 className="">{title}</h2>
        {children}
    </div>
  )
}

export default ContainerElementList