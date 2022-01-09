import React, { useState } from "react";
import Header from "../components/header"
import axios from 'axios';

export const AddPost = ({ onNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [featureImage, setImage] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  return (
    <div className = "Mood-page">
       <h1> proliferous me </h1>
       <h2> psum dolor sit amet, consectetur adipiscing elit. </h2>

    <form>

        <div className = "Field">
        <label> Mood: </label>
        <input
           value={mood}
           onChange={event => setMood(event.target.value)}
        />
        </div>

        <div className = "Field">
        <label> Title: </label>
        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        </div>

        <div className = "Field">
        <label> Content: </label>
        <input
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        </div>

        <div className = "Field">
        <label> Feature Image: </label>
        <input
          type = "file"
          accept= "image/png, image/jpeg"
          onChange = {event => {
            setImage(event.target.files[0]);
            setIsFilePicked(true)}
          }
        />
        </div>

        <div className = "Field">
        <input
          type = "submit"
          value = "Add Post"
          onClick= {async () => {
            const formData = new FormData();
            formData.append('feature_image', featureImage, featureImage.name);
            console.log(featureImage);
            axios.post("add_post", formData);
    }}
        />
        </div>

    </form>

    <Header />

    </div>
  );
};
