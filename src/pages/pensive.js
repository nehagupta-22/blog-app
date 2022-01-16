import React from 'react'
import '../App.css';
import Posts from "../components/posts.js"
import Header from "../components/header.js"

function Pensive({post_list, set_post_list}) {

  return(
    <div className = "Mood-page">
       <h1> pensive me </h1>
       <h2> for touchy-feely thoughts on school, relationships and life in general </h2>

       <Posts
       posts_list = {post_list}
       set_posts_list = {(data) => set_post_list(data)}
       mood = "pensive"
       />

        <Header />

   </div>

  )
}

export default Pensive;
