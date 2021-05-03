import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Posts from "../components/Posts/Posts";
import Footer from "../components/Footer/Footer";


export const Home = () => {
  return (
    <Container>
       <div>       
       <Jumbotron />
       <Posts />
       <Footer />
      </div>
    </Container>
  );
};

export default Home;