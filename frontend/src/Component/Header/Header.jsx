import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from "../../images/logo.png"


const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='mylogo'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='navbar'>
                    <Link to="/about"> MyIntro </Link>
                    <Link to="/skills"> Skills </Link>
                    <Link to="/services"> Services </Link>
                    <Link to="/project"> Projects </Link>
                    <Link to="/contact"> ContactMe </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
