import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/prashanttyagi7/" target='blank'><BsLinkedin /></a>
            <a href="https://github.com/prashant0079" target='blank'><BsGithub /></a>
        </div>
    )
}

export default HeaderSocials