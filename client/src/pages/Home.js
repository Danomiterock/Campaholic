import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import axios from "axios";

export const Home = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  // useEffect(
  //   () => axios.get("api/posts/recent").then((data) => setRecentPosts(data)),
  //   []
  // );

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get("/api/posts/recent");
      console.log(response);
      setRecentPosts(response.data)
      // ...
    }
   fetchData();
  }, []); 

  return (
    <div className="content">
      <Jumbotron />
      <Posts posts={recentPosts} />
      <Footer />
    </div>
  );
};

export default Home;
