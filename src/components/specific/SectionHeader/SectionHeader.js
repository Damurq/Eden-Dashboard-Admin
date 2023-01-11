import React from 'react'
import { Link } from "react-router-dom"
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import './SectionHeader.css'

const SectionHeader = ({to, section}) => {
  return (
    <div className='section-header'>
        <Link to={to} className="section-header__back">
            <BsFillArrowLeftCircleFill />
        </Link>
        <h1 className="section-header__title">
            {section}
        </h1>
    </div>
  )
}

export default SectionHeader