import React, {useState} from 'react'
import { Link } from "react-router-dom"

import IconsComponent from '../IconsComponent/IconsComponent'
import logo_dark_IMG_small from '../../assets/images/logo_dark_IMG_small.png'
import isotipo from '../../assets/images/isotipo.png'

import './Navbar.css'

const Navbar = ({ data }) => {

    const [activeMenu, setActiveMenu] = useState(false)
    return (
        <div className='navegation' onClick={(e) => { 
            setActiveMenu(!e.currentTarget.classList.contains('active'))
            e.currentTarget.classList.toggle('active') 
            }}>
            <ul>
                <li>
                    <img src={activeMenu ? logo_dark_IMG_small : isotipo} alt="eden-logo" />
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
export default Navbar