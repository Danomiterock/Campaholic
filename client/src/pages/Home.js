import React, {useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import axios from "axios";

export const Home = () => {
  const [recentPosts, setRecentPosts] = useState();

  useEffect(() => {axios.get("api/posts/recent").then(data => setRecentPosts(data))}, []) 
  
  
  

  return (
    <div className="content">
      <Jumbotron />
      <Posts posts = {recentPosts} />
      <Footer />
    </div>
  );
};

export default Home;
