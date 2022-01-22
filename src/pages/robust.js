import React from 'react'
import '../App.css';
import Posts from "../components/posts.js"
import Header from "../components/header.js"

function Robust({post_list, set_post_list}) {

  return(
    <div className = "Mood-page">
       <h1> robust me </h1>
       <h2> reflections from jumping onto the fitness bandwagon during quarantine </h2>

       <Posts
       posts_list = {post_list}
       set_posts_list = {(data) => set_post_list(data)}
       mood = "robust"
       />

   </div>

  )
}

export default Robust;
