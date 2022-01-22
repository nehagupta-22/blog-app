import React, { useState } from "react";
import consumerism from "../components/images/consumerism.jpeg"
import exercise from "../components/images/exercise.gif"
import Neha from "../components/images/Neha.jpg"
import sexism from "../components/images/sexism.jpg"
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
      "sexism": sexism,
      "consumerism": consumerism,
      "exercise": exercise
    }
    return lookup[image_name];
  }

  return (
    <div>
    {posts_list.map(post => {
      const postID = String(post.id);
      if (post.mood == mood){
      return (
        <Card style={{ width: '50rem' }}>
          <Card.Img variant="top" src={get_image_path(post.feature_image)} />
          <Card.Body>
            <Card.Title as="<DivStyledAsH2>">{post.title}</Card.Title>
            <Card.Text>
              {post.content}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
        })}
      </div>)
    }

    export default Posts;
