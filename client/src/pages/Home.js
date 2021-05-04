import React from "react";
import Jumbotron from "../components/Jumbotron";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div className="content">
      <Jumbotron />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
