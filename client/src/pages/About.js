import React from "react";
import { Card, Row } from "react-bootstrap";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <Row className="cardDeck">
        <div>
          <Card className="aboutCard" >
            <Card.Img variant="top" src="../assets/image/myrla.jpg" />
            <Card.Body>
              <Card.Title>Myrla Flores</Card.Title>
              <Card.Text>
                Myrla's work experience is in Case Management and is always willing to take up on new challenges and problem solving.
                <br />
                <a
                  variant="primary"
                  href="https://competent-kepler-c24de2.netlify.app/"
                >
                  View Portfolio
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br/>
        <div>
          <Card className="aboutCard" >
            <Card.Img variant="top" src="../assets/image/profpic.jpg" />
            <Card.Body>
              <Card.Title>Triston Burns</Card.Title>
              <Card.Text>
              Triston Burns is an aspiring React web developer from Tucson, Arizona.
              He has experience in data analysis, data collection, and working with third-part APIs.
                <br />
                <a
                  variant="primary"
                  href="https://tcb-react-portfolio.herokuapp.com/"
                >
                  View Portfolio
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br/>
        <div>
          <Card className="aboutCard" >
            <Card.Img variant="top" src="../assets/image/Portrait.jpg" />
            <Card.Body>
              <Card.Title>Dan Lucas</Card.Title>
              <Card.Text>
                Dan is a former police officer with a strong background in
                communication.
                <br />
                <a variant="primary" href="https://danomiterock.netlify.app/">
                  View Portfolio
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br/>
        <div>
          <Card className="aboutCard" >
            <Card.Img variant="top" src="../assets/image/RonPic.jpg" />
            <Card.Body>
              <Card.Title>Wes Howard</Card.Title>
              <Card.Text>
                Wes has high level personal skills and training, as well a passion for coding
                <br />
                <a variant="primary" href="https://biggronn.github.io/PortfolioRWH/">
                  View Portfolio
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br/>
      </Row>
    </div>
  );
};
export default About;
