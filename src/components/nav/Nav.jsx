import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { SlBadge } from 'react-icons/sl'
import { FaHandshakeSimple } from 'react-icons/fa6'
import { MdContactPhone } from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><SlBadge /></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><FaHandshakeSimple /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><MdContactPhone /></a>
        </nav>
    )
}

export default Nav