import React from 'react'
import Logo from "../images/Logo.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className = "navbar">
      <div className="container">
        <div className="logo">
        <Link to="/">
        <img src={Logo} alt="" />
        </Link>
    </div>
    <div className="links">
          <Link className="link" to="/?cat=Sedan">
            <h6>Sedan</h6>
          </Link>
          <Link className="link" to="/?cat=SUVs">
            <h6>SUVs</h6>
          </Link>
          <Link className="link" to="/?cat=Truck">
            <h6>Truck</h6>
          </Link>
          <Link className="link" to="/?cat=Luxury">
            <h6>Luxury</h6>
          </Link>
          <Link className="link" to="/?cat=Electric">
            <h6>Electric</h6>
          </Link>
          <Link className="link" to="/?cat=Hybrids">
            <h6>Hybrids</h6>
          </Link>
          <Link className="link" to="/?cat=Sport cars">
            <h6>Sport cars</h6>
          </Link>
          <span>Loc</span>
          <span>Logout</span>
          <span className="add">
          <Link className ="link" to= "/add">Add</Link>
          </span>
        </div>
      </div>
    </div>
    )
  }
  
  export default Navbar