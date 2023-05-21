import React from 'react'
import { Container, Col, Carousel} from 'react-bootstrap';
import ephotech1 from '../assets/ephotech-section/ephotech_1.jpg'
import ephotech2 from '../assets/ephotech-section/ephotech_2.jpg'
import ephotech3 from '../assets/ephotech-section/ephotech_3.jpg'
import '../section.css'

const SectionCarouselContent = (props) => {

    return (
        <>
            <img
                className="image"
                src={props.imageSource}
                alt="Slide Content"
            />
            <Carousel.Caption className='carousel-caption'>
                <h3>{props.caption}</h3>
            </Carousel.Caption>
        </>
    )
}

const EPHOTECH = () => {
  return (
    <div id='EPHOTECH' className='root root-ephotech'>
         <Container id='EPHOTECH' className='d-flex flex-column ground'>
            <h1 className='title'>EPHOTECH</h1>
            <p className='description'>
                EPHOTECH adalah lomba yang diadakan oleh G-Tech. EPHOTECH diadakan sekali setiap tahun.
                EPHOTECH berisi lomba - lomba yang mengasah ilmu pengetahuan anggotanya mengenai teknologi dan
                menambah semangat saing. Diharapkan dengan adanya EPHOTECH dapat meningkatkan daya saing dan pengetahuan
                dari pesertanya.
            </p>

            <h2 className='subtitle'>Foto - Foto EPHOTECH</h2>
            <Col md="15" className='carousel-cont'>
                <Carousel w-20vh h-20vh className='carousel-slide'>
                    <Carousel.Item className='carousel-item'>
                        <SectionCarouselContent imageSource={ephotech1} caption="Awal EPHOTECH"/>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <SectionCarouselContent imageSource={ephotech2} caption="Pertengahan EPHOTECH"/>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <SectionCarouselContent imageSource={ephotech3} caption="Akhir EPHOTECH"/>
                    </Carousel.Item>  
                </Carousel>
            </Col>
        </Container>
    </div>
  )
}

export default EPHOTECH