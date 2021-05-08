
import React, { useState, useEffect } from "react";
import API from "../../utils/API";


// Trying to think of a way to setup the component
// to only render the user's own posts to their profile page
// Using a conditional like if(username === "username"){etc.}
// Would become a major security issue if someone could manipulate
// the logic to display a different user's posts on their page.
// This means that the best route to take is a comparison of unique
// identifiers.
// Right now will work on getting the home page done so I have material

function Posts({ posts }) {
console.log(posts);

  // Setup our post's state
  const [posts, setPosts] = useState([]);
  // //   const [formObject, setFormObject] = useState({});

  // Load all posts and store them with setPosts
  useEffect(() => {
    loadPosts();
  }, []);

  // Loads all posts and sets them to posts
  function loadPosts() {
    API.getPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <section className="posts">
      <h2>Feed</h2>

      {posts ? 
        posts.map((post) => (
          <article className="postcard">
            {console.log(post)}
            <div className="postheading">
              <p>{post.username}</p>
              <p>Posted: {post.date}</p>
            </div>
            <div className="postmain">
              <img
                src="https://images.unsplash.com/photo-1590990771866-c172665b47ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                alt="location"
              />
              <p className="location">{post.location}</p>
              <p className="description">{post.description}</p>
              <p className="statement">{post.statement}</p>

            </div>
            <div className="submain">
              <p className="activities">Activities: </p>
              <ul>
                <li>{post.activities.map(activity => <h3 key={activity.title}>{activity.title}</h3>)}</li>
              </ul>
              <p className="friends">{post.username} is with:</p>
              <ul className="friendlist">
                <li>{post.friends.map(friend => <h3 key={friend.username}>{friend.username}</h3>)}</li>
              </ul>
            </div>
          </article>
        ))
       : <h2>No Posts to Display</h2>}
    </section>
  );
}

export default Posts;
