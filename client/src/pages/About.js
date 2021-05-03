import React from "react";
import { Container, Card, link, Row } from "react-bootstrap";

export const About = () => {
  return (
    <Container>
      <Row>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/assets/image/myrla.jpg" />
            <Card.Body>
              <Card.Title>Myrla Flores</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <link
                variant="primary"
                href="https://competent-kepler-c24de2.netlify.app/"
              >
                View Portfolio
              </link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/assets/image/profpic.jpg" />
            <Card.Body>
              <Card.Title>Triston Burns</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <link
                variant="primary"
                href="https://tcb-react-portfolio.herokuapp.com/"
              >
                View Portfolio
              </link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../pub;ic/assets/image/RonPic.jpg" />
            <Card.Body>
              <Card.Title>Wes Howard</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <link variant="primary" href="">
                View Portfolio
              </link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/assets/image/Portfolio.js" />
            <Card.Body>
              <Card.Title>Dan Lucas</Card.Title>
              <Card.Text>
                Dan is a former police officer with a strong background in communication.              </Card.Text>
              <link variant="primary" href="https://danomiterock.netlify.app/">
                View Portfolio
              </link>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
  );
};
