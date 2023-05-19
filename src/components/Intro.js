import { Row, Container, Col, Button, Card,  Carousel} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import imgLatdas from '../assets/intro/imgLatdas.jpg'
import ephotech from '../assets/intro/ephotech.jpg'
import gTechParty from '../assets/intro/g-tech-party.jpg'
import "../Intro.css"

const Intro = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (screenWidth >= 532) {
    return (
      <div className='border intro'>
            <Container className = 'text-white d-flex justify-content-center align-items-center border'>
              <Row>
                <Col>
                  <h1>Galeri G-Tech</h1>
                </Col>
              </Row>
            </Container>

            <Container className='d-flex mt-4 menu-cont'>
                <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
                    <Card.Img className="card-image" src={imgLatdas} style={{height: "40vh"}}/>
                    <Card.Body>
                      <Card.Title style={{color: 'white'}}>LATDAS</Card.Title>
                      <Button variant="success" className='intro-button'><a href='#LATDAS' className='intro-link'>Lihat Foto</a></Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
                    <Card.Img className="card-image" variant="top" src={ephotech} style={{height: "40vh"}} />
                    <Card.Body>
                      <Card.Title style={{color: 'white'}}>EPHOTECH</Card.Title>
                      <Button variant="success" className='intro-button'><a href='#EPHOTECH' className='intro-link'>Lihat Foto</a></Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
                  <Card.Img className="card-image" variant="top" src={gTechParty} style={{height: "40vh"}}/>
                  <Card.Body>
                      <Card.Title style={{color: 'white'}}>G-Tech Party</Card.Title>
                      <Button variant="success" className='intro-button'><a href='#PARTY' className='intro-link'>Lihat Foto</a></Button>
                  </Card.Body>
                </Card>
            </Container>
      </div>
    )
  } else {
    return (
      <div className='border intro'>
            <Container className='text-white d-flex justify-content-center align-items-center border'>
              <Row>
                <Col>
                  <h1>Galeri G-Tech</h1>
                </Col>
              </Row>
            </Container>

            <Carousel w-20vh h-20vh className='carousel-slide'>
                    <Carousel.Item className='carousel-item'>
                      <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
                        <Card.Img className="card-image" src={imgLatdas} style={{height: "40vh"}}/>
                        <Card.Body>
                          <Card.Title style={{color: 'white'}}>LATDAS</Card.Title>
                          <Button variant="success" className='intro-button'><a href='#LATDAS' className='intro-link'>Lihat Foto</a></Button>
                        </Card.Body>
                      </Card>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                      <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
                        <Card.Img className="card-image" variant="top" src={ephotech} style={{height: "40vh"}} />
                        <Card.Body>
                          <Card.Title style={{color: 'white'}}>EPHOTECH</Card.Title>
                          <Button variant="success" className='intro-button'><a href='#EPHOTECH' className='intro-link'>Lihat Foto</a></Button>
                        </Card.Body>
                      </Card>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                      <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
                        <Card.Img className="card-image" variant="top" src={gTechParty} style={{height: "40vh"}}/>
                        <Card.Body>
                          <Card.Title style={{color: 'white'}}>G-Tech Party</Card.Title>
                          <Button variant="success" className='intro-button'><a href='#PARTY' className='intro-link'>Lihat Foto</a></Button>
                        </Card.Body>
                  </Card>
                    </Carousel.Item>
                </Carousel>
      </div>
    )
  }
}

export default Intro