import React, { useState, useEffect} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function App() {
  const[posts, setPosts] = useState([]);
  // initial state is empty array because Todos expects an array as an input,
  // and the initial input to Todos is the initial state

  useEffect(() => {
    fetch('/blog-posts').then(response => response.json())
    .then(data => {setPosts(data.posts)})
  }, []);

  function open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("Hamburger").style.display = "none";
  }

  function close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("Hamburger").style.display = "block";
  }

  return (
    <Router>
    <div className="App">

        <div className="Home bg-image">
           <button className = "Button" id = "Hamburger" onClick = {open}>
              <a> ☰ </a>
            </button>
           <h1> moody me </h1>
        </div>

        <div className = "Sidebar" id = "mySidebar">
           <button className = "Button" onClick = {close}> &times; </button>
           <ul>
                <li><a href="#" className = "sidebarItem">grumpy me</a></li>
                <li><a href="#" className = "sidebarItem">pretentious me</a></li>
                <li><a href="#" className = "sidebarItem">robust me</a></li>
                <li><a href="#" className = "sidebarItem">pensive me</a></li>
           </ul>
        </div>

        <div className="About">
            <h2> Hey, I'm Neha! </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat bibendum maximus. Fusce eu bibendum arcu. Quisque lobortis malesuada velit, quis ultricies metus fermentum nec. Sed sollicitudin semper luctus. Suspendisse risus mi, condimentum eu venenatis sed, tincidunt quis nulla. Ut venenatis magna quis dui porttitor sollicitudin. Pellentesque vel suscipit diam. Cras tortor magna, eleifend sed placerat vitae, feugiat a sapien.
            </p>
        </div>
    </div>
    </Router>
  );
}

export default App;
