import { Row, Container, Col, Button, Card,  Carousel} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import imgLatdas from '../assets/intro/imgLatdas.jpg'
import ephotech from '../assets/intro/ephotech.jpg'
import gTechParty from '../assets/intro/g-tech-party.jpg'
import "../Intro.css"

const IntroCard = (props) => {
  
  return (
    <>
      <Card style={{ width: '18rem', backgroundColor: '#282c34', height: "60vh"}}>
        <Card.Img className="card-image" src={props.pictureLink} style={{height: "40vh"}}/>
        <Card.Body>
          <Card.Title style={{color: 'white'}}>{props.title}</Card.Title>
          <Button variant="success" className='intro-button'><a href={props.buttonLink} className='intro-link'>Lihat Foto</a></Button>
        </Card.Body>
      </Card>
    </>
  )
}

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
                <IntroCard pictureLink={imgLatdas} title="LATDAS" buttonLink = '#LATDAS'/>
                <IntroCard pictureLink={ephotech} title="EPHOTECH" buttonLink = '#EPHOTECH'/>
                <IntroCard pictureLink={gTechParty} title="G-Tech Party" buttonLink = '#PARTY'/>
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
                      <IntroCard pictureLink={imgLatdas} title="LATDAS" buttonLink = '#LATDAS'/>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                      <IntroCard pictureLink={ephotech} title="EPHOTECH" buttonLink = '#EPHOTECH'/>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                      <IntroCard pictureLink={gTechParty} title="G-Tech Party" buttonLink = '#PARTY'/>
                    </Carousel.Item>
                </Carousel>
      </div>
    )
  }
}

export default Intro