import React from 'react'
import Logo from '../İmages/Logo/Taskool.png'
import User from '../İmages/User/Ellipse.png'
import { FaSearch, FaRegBell } from "react-icons/fa";
function header() {
    return (
        <div className='container'>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <ul>
                <li><FaSearch/></li>
                <li><FaRegBell/></li>
                <li></li>
                <li><img src={User} alt="User" /></li>
            </ul>
        </div>
    )
}

export default header
