import React, { useState } from 'react'
import Posts from "../components/posts.js"
import Header from "../components/header"

function Grumpy({post_list, set_post_list}) {

  return(
    <div className = "Mood-page">
       <h1> grumpy me </h1>
       <h2> psum dolor sit amet, consectetur adipiscing elit. </h2>

       <Posts
       posts_list = {post_list}
       set_posts_list = {(data) => set_post_list(data)}
       mood = "grumpy"
       />

       <Header/>
   </div>

  )
}

export default Grumpy;
