import {NavLink} from 'react-router-dom'
import React from 'react'

import '../css/Nav.css'

const Nav = () => {
  return (
    <div className='NavContainer'>
        <nav>
            <ul>
                <li>
                    <NavLink to='/' activeClassName='active'><i class="fa-solid fa-house"></i></NavLink>
                </li>
                <li>
                    <NavLink to='/proyects' activeClassName='active'><i class="fas fa-laptop-house"></i></NavLink>
                </li>
                <li>
                    <NavLink to='/blog' activeClassName='active'><i class="far fa-address-book"></i></NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav