import React from 'react'

export default function MyAccountDropDown() {
  return (
    <div>
        <div className="dropdown">
        <span className='' data-bs-toggle="dropdown">My Account^</span>
      <ul className="dropdown-menu rounded-0">
    <li><a className="dropdown-item" href="#">Login</a></li>
    <li><a className="dropdown-item" href="#">BookMark</a></li>
    <li><a className="dropdown-item" href="#">My Cart</a></li>
    <li><a className="dropdown-item" href="#">My Account</a></li>
  </ul>
</div>
    </div>
  )
}
