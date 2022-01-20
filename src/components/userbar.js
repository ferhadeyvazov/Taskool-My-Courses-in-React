import React from 'react'
import User from '../İmages/User/Ellipse 95.jpg'
import {FaRegImage, FaCamera, FaCog, FaSignOutAlt} from "react-icons/fa";
import {NavLink} from 'react-router-dom'
import { useState } from 'react'

function Userbar() {
    const[toggle, setToggle] = useState(false);
    return (
    <div className='box1'>
<div>
<img src={User} alt="user" />
<NavLink to="/"><h3>Gunel Mammadova</h3></NavLink>
</div>
<button id='checkbox' onClick={ () => setToggle(!toggle)}>Click</button>
<label htmlFor='checkbox' className='burger'>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
</label>
            <ul className={toggle ? 'sidebar-active' : 'sidebar'}>
<NavLink to ="/Kurslarim"><li><FaRegImage/>Kurslarım</li></NavLink>
<NavLink to="/Balans"><li><FaCamera/>Balans</li></NavLink>
<NavLink to="/Ayarlar"><li><FaCog/>Ayarlar</li></NavLink>
<NavLink to="/Cixis"><li><FaSignOutAlt/>Çıxış</li></NavLink>
            </ul>
            </div>

         
    )
}

export default Userbar
