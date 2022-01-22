import React, { useState } from "react";
import Header from "../components/header"

export const AddPost = ({ onNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [feature_image, setImage] = useState("");

  return (
    <div className = "Mood-page">
       <h1> proliferous me </h1>
       <h2> "And you, be fruitful and multiply, teem on the earth and multiply in it.” </h2>

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
        <textarea
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        </div>

        <div className = "Field">
        <label> Feature image: </label>
        <input
          value={feature_image}
          onChange={event => setImage(event.target.value)}
        />
        </div>

        <div className = "Field">
        <input
          type = "submit"
          value = "Add Post"
          onClick= {async () => {
            const post = { title, content, mood, feature_image };
            await fetch("/add_post", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(post)
            });
    }}
        />
        </div>

    </form>

    </div>
  );
};
