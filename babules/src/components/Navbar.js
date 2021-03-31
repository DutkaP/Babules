import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div type = 'button' className="navbar-brand">
           <h1>Babules</h1>
            <ul className="navbar-nav">
      <li className="nav-item">
      <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="/">Find Category</NavDropdown.Item>
        <NavDropdown.Item href="/addcategory">Add Category</NavDropdown.Item>
        </NavDropdown>
      </li>
      <li className="nav-item">
      <NavDropdown title="Activities" id="basic-nav-dropdown">
        <NavDropdown.Item href="/activities">Activities</NavDropdown.Item>
        </NavDropdown>
      </li>
      <li>
      <NavLink className="nav-link" 
        to="/help" exact>Допомога</NavLink>  
      </li>
             </ul>
        </div>
    </nav>
)