import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import gmail from '../assets/icons/gmail.svg'
import resume from '../assets/resume.pdf'
import linkedin from '../assets/icons/linkedin.svg'
import medium from '../assets/icons/medium.svg'
import twitter from '../assets/icons/twitter.svg'
import phone from '../assets/icons/phone-call.svg'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:gh_bennaceur@esi.dz")
    }
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Hichem <span>Bennaceur</span> </div>
            <div className="sidebar__item sidebar__title">Junior Software Engineer </div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://medium.com/@hichampredator"><img src={medium} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://twitter.com/BennaceurHichem"><img src={twitter} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.linkedin.com/in/hichem-bennaceur-335659147/"><img src={linkedin} alt="Linkedin" className="sidebar__icon mr-3" /></a>
                <a href="https://github.com/BennaceurHichem"><img src={github} alt="Github" className="sidebar__icon mr-3" /></a>

            </figure>
            <div className="sidebar__contact">

                <div className="sidebar__item">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Algiers, Algeria</div>
                <div className="sidebar__item">                   
                 <img src={gmail} alt="location" className="sidebar__icon mr-3" />
gh_bennaceur@esi.dz</div>
                <div className="sidebar__item">           
                      <img src={phone} alt="location" className="sidebar__icon mr-3" />
            +213781323567</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email me</div>
        </div>
    )
}

export default Sidebar;