import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'

function Header () {
  return (
    <div className = "Header">
        <Link to = "/">moody me</Link>
    </div>
  )

}

export default Header;
