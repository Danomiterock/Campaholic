import React, { useState } from "react";
import "./results.css";
import NewPost from "../NewPost";
import API from "../../utils/API";

function Result(props) {
  const [newPost, setNewPost] = useState(null);
  const [formObject, setFormObject] = useState({});
  const [comment, setComment] = useState("");

  // // Handles updating component state when the user types into the input field
  // function handlePostInputChange(event) {
  //   const target = event.target;
  //   const value = target.innerHTML;
  //   const name = target.name;
  //   setFormObject({ [name]: value });
  // }

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setComment(value);
  };

  // Return the Search results with a button to create a new post
  // Clicking on "Create New Post" will update HTML and display a comment section
  // Clicking the "Post" button under the comment section will
  // Call a POST request to the API and store the new post's data
  // In the campaholic mongoDB database

  // Add the new post component when user clicks "Create New Post"
  const newPostHTML = () => {
    const postHTML = (
      <>
        <NewPost
        name="comment"
        value={comment}
        onChange={handleInputChange}
        />
        <button type="submit" name="newpost" disabled={!comment}>
          Post
        </button>
      </>
    );

    setNewPost(postHTML);
  };

  return (
    <>
      <img src={props.src} alt="location" className="image" />
      <p>Location: {props.location}</p>
      <p>Description: {props.description}</p>
      <p>State: {props.state}</p>
      <ul>
        <li className="reclist">{[props.activities]}</li>
      </ul>
      <ul>
        <li className="reclist">{[props.events]}</li>
      </ul>
      {newPost}
      <button type="submit" onClick={newPostHTML}>
        Create New Post
      </button>
    </>
  );
}

export default Result;
