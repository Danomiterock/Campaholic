import React from "react";
import { Media, Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import profile from "../../public/assets/sampleProfile.png"
import chiricahua from "../../public/assets/chiricahua.png"

export const Profile = () => {
    return (
        <>
        <div className="headerProfile">
            <h1
                className="brownColor textCenter font-60 bold-700"
            >
                Profile
      </h1>
            <Container className="profilePic" >
                <Row>
                <img style={{borderRadius: "25px", margin:"15px"}}
                width={260}
                height={280}
                className="mr-3"
                src={profile}
                alt="Generic placeholder"
            />
                    <Col className="darkColor bold-700"><h4>Username: Bob</h4><h4>Location: Tucson</h4></Col>
                    <Col className="darkColor bold-700"><h2>Plan your next trip below.</h2><p><Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button>Search</Button>
                  </Form></p></Col>
                </Row>
                </Container>
                <Container>
                </Container>
            <div>
                <Container className="lastTrip">
                <Media>
                    <img className="lastTripPic" style={{borderRadius: "25px", margin:"15px"}}
                        width={500}
                        height={400}
                        className="mr-3"
                        src={chiricahua}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5 className="primaryColor">Media Heading</h5>
                        <Col className="primaryColor">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
        </Col>
        </Media.Body>
        </Media>
        </Container>
        </div>
                    </div>
                    </>

  );
}
export default Profile;
