import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import NavList from "../components/NavList";
import Jumbotron from "../components/Jumbotron";
import Posts from "../components/Posts";
import Footer from "../components/Footer";


export const Home = () => {
  return (
    <Container>
       <div>
       <Header />
       <NavList />
       <Jumbotron />
       <Posts />
       <Footer />
      </div>
    </Container>
  );
};

export default Home;