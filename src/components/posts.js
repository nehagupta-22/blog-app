import React, { useState } from "react";
import consumerism from "../components/images/consumerism.jpeg"
import clothes from "../components/images/clothes.jpg"
import math from "../components/images/math.jpg"
import shoes from "../components/images/shoes.jpg"
import wonderwoman from "../components/images/wonderwoman.jpeg"
import Card from 'react-bootstrap/Card'

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

  function get_image_path(image_name){
    const lookup = {
      "math": math,
      "consumerism": consumerism,
      "clothes": clothes,
      "shoes": shoes,
      "wonderwoman": wonderwoman
    }
    return lookup[image_name];
  }

  return (

    <div>
    {posts_list.map(post => {
      const postID = String(post.id);
      if (post.mood == mood){
      return (
        <div>
        <Card style={{ width: '30rem'}}>
          <Card.Img variant="top" src={get_image_path(post.feature_image)} />
          <Card.Body>
            <Card.Title style = {{fontSize: '1.3rem', fontStyle: 'bold'}}>{post.title}</Card.Title>
            <Card.Text style = {{fontSize: '1rem', whiteSpace: "pre-line", textAlign: "left" }}>
              {post.content.split("<br/>").join("\n")}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        </div>
      )}
        })}
      </div>)
    }

    export default Posts;
