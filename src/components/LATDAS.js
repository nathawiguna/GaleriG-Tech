import React from 'react'
import { Container, Col, Carousel} from 'react-bootstrap';
import latdas1 from '../assets/latdas-section/latdas-1.jpg'
import latdas2 from '../assets/latdas-section/latdas-2.jpg'
import latdas3 from '../assets/latdas-section/latdas-3.jpg'
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

const LATDAS = () => {
  return (
    <div className='root root-latdas'>
        <Container id='LATDAS' className='d-flex flex-column ground'>
            <h1 className='title'>LATDAS</h1>
            <p className='description'>
                LATDAS adalah kegiatan untuk menyeleksi anggota baru G-Tech. Latdas diadakan sekali setiap tahun.
                LATDAS berisi kegiatan - kegiatan yang mengasah ilmu pengetahuan anggotanya mengenai teknologi dan
                menambah kebersamaan. Diharapkan dengan adanya LATDAS dapat meningkatkan kebersamaan dan pengetahuan
                dari anggotanya.
            </p>

            <h2 className='subtitle'>Foto - Foto LATDAS</h2>
            <Col md="15" className='carousel-cont'>
                <Carousel w-20vh h-20vh className='carousel-slide'>
                    <Carousel.Item className='carousel-item'>
                        <SectionCarouselContent imageSource={latdas1} caption="Awal Latdas"/>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <SectionCarouselContent imageSource={latdas2} caption="Pertengahan Latdas"/>
                    </Carousel.Item>

                    <Carousel.Item className='carousel-item'>
                        <SectionCarouselContent imageSource={latdas3} caption="Akhir Latdas"/>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Container>
    </div>
  )
}

export default LATDAS