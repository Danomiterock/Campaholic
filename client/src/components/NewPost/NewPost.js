// import { Button } from "bootstrap";
import React from "react";
// import API from "../../utils/API";

// Add a comment component called "CreatePost" when
// User clicks "Create Post" button on a Search result
function NewPost(props) {

  return (
      <>
        <form className="comment">
          <input
            type="text"
            placeholder="Add a comment..."
            {...props}
          />
        </form>
      </>
  );
}

export default NewPost;
