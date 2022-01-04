import React, { useState, useEffect} from 'react'
import '../App.css';
import yay from "../components/images/yay.jpg"
import Neha from "../components/images/Neha.jpg"
import DSC02878 from "../components/images/DSC02878.jpg"
import { Posts } from "../components/posts.js"

function Page({post_list, set_post_list}) {

  return(
    <div className = "Mood-page">
       <h1> grumpy me </h1>
       <h2> psum dolor sit amet, consectetur adipiscing elit. </h2>

       <Posts
       posts_list = {post_list}
       set_posts_list = {(data) => set_post_list(data)}
       mood = "grumpy"
       />

        <div className = "Header">
           <p>moody me</p>
        </div>

   </div>

  )
}

export default Page;
