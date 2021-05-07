import React, { useState} from "react";
import Jumbotron from "../components/Jumbotron";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

export const Home = () => {
  const [recentPosts, setRecentPosts] = useState();

  // componentDidMount() {
  //   this.get("api/posts/recent").then(data => setRecentPosts(data));
  // }
  

  return (
    <div className="content">
      <Jumbotron />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
