import React from "react";
import { Link } from 'react-router-dom';
import '../App.css'

function Sidebar () {

  function open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("Hamburger").style.display = "none";
  }

  function close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("Hamburger").style.display = "block";
  }

  return (
    <div className = "Navigation">
       <button className = "Button" id = "Hamburger" onClick = {open}>
       <a> ☰ </a>
       </button>

       <div className = "Sidebar" id = "mySidebar">
       <button className = "Button" onClick = {close}> <a> &times; </a></button>
       <ul>
           <li><Link to = "/grumpy" onClick = {close}>grumpy me</Link></li>
           <li><Link to = "/robust" onClick = {close}>robust me</Link></li>
           <li><Link to = "/proliferous" onClick = {close}>proliferous me</Link></li>
       </ul>
    </div>
  </div>
)
}

export default Sidebar;
