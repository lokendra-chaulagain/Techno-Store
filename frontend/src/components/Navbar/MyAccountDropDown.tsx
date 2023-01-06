import React from 'react'

export default function MyAccountDropDown() {
  return (
    <div>
        <div className="dropdown">
        <span className='cp_hover my_black no_selection h6' data-bs-toggle="dropdown">My Account^</span>
      <ul className="dropdown-menu rounded-0">
    <li><a className="dropdown-item" >Login</a></li>
    <li><a className="dropdown-item" >BookMark</a></li>
    <li><a className="dropdown-item" >My Cart</a></li>
    <li><a className="dropdown-item" >My Account</a></li>
    </ul>
   </div>
    </div>
  )
}
