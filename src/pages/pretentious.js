import React from 'react'
import '../App.css';
import Posts from "../components/posts.js"
import Header from "../components/header.js"

function Pretentious ({post_list, set_post_list}) {

  return(
    <div className = "Mood-page">
       <h1> pretentious me </h1>
       <h2> when I'm feeling especially gutsy, I write poems</h2>

       <Posts
       posts_list = {post_list}
       set_posts_list = {(data) => set_post_list(data)}
       mood = "pretentious"
       />

        <Header />

   </div>

  )
}

export default Pretentious;
