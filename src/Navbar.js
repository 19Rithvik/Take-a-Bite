import React from 'react'
import Logo from  './photos/pizzaLogo.png'
import { Link } from "react-router-dom"
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import './Navbar.css'

function Navbar() {
    const [openLinks,setOpenLinks] = React.useState(false)
    function toggleNavbar() {
        setOpenLinks(!openLinks)
    }
    return (
      <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className='hiddenLinks'>
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={toggleNavbar}>
                <ViewStreamIcon />
            </button>
        </div>
      </div>
    )
  }

export default Navbar