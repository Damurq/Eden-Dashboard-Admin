import React from 'react'
import { Link } from "react-router-dom"

import IconsComponent from '../IconsComponent/IconsComponent'

import './Navbar.css'

export const Navbar = ({ data }) => {
    return (
        <div className='navegation' onClick={(e) => { e.currentTarget.classList.toggle('active') }}>
            <ul>
                <li>
                    <a href="">
                        <span className="icon">a</span>
                        <span className="title">Home</span>
                    </a>
                </li>
                {data.elements && data.elements.map((section, index) => {
                    return (section.type === "Link" ?
                        <li key={"nav-li-" + index} >
                            <Link to={section.href}>
                                <IconsComponent icon={section.icon} className="icon"/>
                                <span className="title">{section.name}</span>
                            </Link>
                        </li> :
                        <li key={"nav-li-" + index}>
                            <a href={section.href}>
                                <IconsComponent icon={section.icon} className="icon"/>
                                <span className="title">{section.name}</span>                            </a>
                        </li>)
                })}
            </ul>
            <div className="toggle" ></div>
        </div>
    )
}
