import React from 'react'
import logo from '/src/assets/images/casa-ripa-logo.jpg'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

function Nav() {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 26 26" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>HOME</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>CONTACT</a></li>
        <li><a>ACTIVITIES TO DO</a></li>
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <img src={logo} alt="Casa ripa logo"/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>HOME</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>CONTACT</a></li>
      <li><a>ACTIVITIES TO DO</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <a className="btn">Book now</a>
    <div className="h-8 w-8 m-2">
    <CIcon icon={icon.cilTranslate} size="sm"/>
    {/* <ul className="menu menu-horizontal px-1">
      <li tabIndex={0}>
        
          <CIcon icon={icon.cilTranslate} size="xs"/>
          <ul className="p-2">
            <li><a>English</a></li>
            <li><a>Deutsch</a></li>
          </ul>
        
      </li>
    </ul> */}
    </div>
  </div>
</div>
  )
}

export default Nav