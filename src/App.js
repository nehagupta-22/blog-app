import React, { useState, useEffect} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Page from './pages/grumpy';
import Home from './pages'
import Sidebar from './components/sidebar'

function App() {
  const[posts, setPosts] = useState([]);
  // initial state is empty array because Todos expects an array as an input,
  // and the initial input to Todos is the initial state

  useEffect(() => {
    fetch('/blog-posts').then(response => response.json())
    .then(data => {setPosts(data.posts)})
  }, []);

  return (

    <Router>
    <div className="App" >
        <Routes>
            <Route exact path='/' element={< Home/>}></Route>
            <Route
            exact
            path='/grumpy'
            element={
              <Page
              post_list = {posts}
              set_post_list = {setPosts}
              />
            }
            >
            </Route>
        </Routes>
        <div className = "Sidebar-container">
        <Sidebar />
        </div>
    </div>
    </Router>
  );
}

export default App;
