import React from 'react'
import Posts from "../components/posts.js"

function Grumpy({post_list, set_post_list}) {

  return(
    <div className = "Mood-page">
       <h1> grumpy me </h1>
       <h2> where I grumble about social conventions </h2>

       <Posts
       posts_list = {post_list}
       set_posts_list = {(data) => set_post_list(data)}
       mood = "grumpy"
       />
   </div>
  )
}

export default Grumpy;
