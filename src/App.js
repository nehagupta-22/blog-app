import React, { useState, useEffect} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home from './pages'
import MySidebar from './components/sidebar';
import Grumpy from './pages/grumpy';
import Robust from './pages/robust';
import Broody from './pages/broody';
import { AddPost } from './pages/proliferous';
import 'bootstrap/dist/css/bootstrap.min.css';

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
         <div className = "Sidebar-container">
         <MySidebar />
         </div>
        <Routes>
            <Route exact path='/' element={< Home/>}></Route>

            <Route exact path='/grumpy'
            element={<Grumpy post_list = {posts} set_post_list = {setPosts}/>}>
            </Route>

            <Route exact path='/robust'
            element={<Robust post_list = {posts} set_post_list = {setPosts}/>}>
            </Route>

            <Route exact path='/broody'
            element={<Broody post_list = {posts} set_post_list = {setPosts}/>}>
            </Route>

            <Route exact path='/proliferous'
            element = {<AddPost
              onNewPost = {post =>
                setPosts((currentPosts => [post, ...currentPosts]))}/>
              }>
            </Route>

        </Routes>

    </div>
    </Router>
  );
}

export default App;
