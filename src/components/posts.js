import React, { useState } from "react";
import consumerism from "../components/images/consumerism.jpeg"
import exercise from "../components/images/exercise.gif"
import Neha from "../components/images/Neha.jpg"
import sexism from "../components/images/sexism.jpg"

function Posts ({posts_list, set_posts_list, mood}) {

  const [blurbOpacity, setBlurbOpacity] = useState(1);
  const [postOpened, setPostOpened] = useState(false);

  function open_post(id) {
    if (!postOpened) {
      document.getElementById(id).style.display = "block";
      setBlurbOpacity(0.5);
      setPostOpened(true);
    }
  };

  function close_post(id) {
    document.getElementById(id).style.display = "none";
    setBlurbOpacity(1);
    setPostOpened(false);
  };

  return (
    <div>
    {posts_list.map(post => {
      const postID = String(post.id);
      if (post.mood == mood){

      return (
        <div className = "Post" key = {post.id}>

            <div className= "Blurb"
                 style = {{opacity: blurbOpacity}}
                 onClick = {() => {open_post(postID)}}>
            <a>
                <div className = "Blurb-item">                  
                    post.feature_image = sexism
                    <img src = {post.feature_image} className = "Blurb-image"/>
                </div>
                <div className = "Blurb-item">
                    <div className = "Post-date"> {post.date} </div>
                    <h3> {post.title} </h3>
                    <div className = "Info"> {post.content}</div>
                </div>
            </a>
            </div>

            <div className = "Expanded-Post" id = {postID}>
                <button className = "Close-button"
                        onClick = {() => {close_post(postID)}}>
                  <a>&times; </a>
                </button>
                <h3> {post.title} </h3>
                <div className = "Content">
                    <p> {post.content}</p>
                </div>
            </div>

        </div>
      )}
        })}
      </div>)
    }

    export default Posts;
