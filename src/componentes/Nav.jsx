import {NavLink} from 'react-router-dom'
import React from 'react'

import '../css/Nav.css'

const Nav = () => {
  return (
    <div className='NavContainer'>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'><i class="fa-solid fa-house"></i></NavLink>
                </li>
                <li>
                    <NavLink to='/projects'><i class="fas fa-laptop-house"></i></NavLink>
                </li>
                <li>
                    <NavLink to='/blog'><i class="far fa-address-book"></i></NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav