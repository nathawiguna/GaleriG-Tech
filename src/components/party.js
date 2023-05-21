import React from 'react'
import { Container, Col, Carousel} from 'react-bootstrap';
import party1 from '../assets/party-section/party_1.jpg'
import party2 from '../assets/party-section/party_2.jpg'
import party3 from '../assets/party-section/party_3.jpg'
import '../section.css'

const SectionCarouselContent = (props) => {
    
    return (
        <>
            <img
                className="image"
                src={props.imageSource}
                alt="Slide Image"
            />
            <Carousel.Caption className='carousel-caption'>
                <h3>{props.caption}</h3>
            </Carousel.Caption>
        </>
    )
}

const party = () => {
  return (
    <div id='PARTY' className='root root-party'>
    <Container id='PARTY' className='d-flex flex-column ground'>
       <h1 className='title'>G-Tech Party</h1>
       <p className='description'>
           G-Tech Party adalah kegiatan refreshing yang diadakan oleh G-Tech. G-Tech Party diadakan sekali setiap tahun.
           G-Tech Party kegiatan - kegiatan yang menyenangkan dan menambah kebersamaan anggota. Kegiatan ini sangat
           ditunggu oleh anggota G-Tech. Diharapkan dengan adanya G-Tech Party dapat menambah kebersamaan anggota.
       </p>

       <h2 className='subtitle'>Foto - Foto G-Tech Party</h2>
       <Col md="15" className='carousel-cont'>
           <Carousel w-20vh h-20vh className='carousel-slide'>
                <Carousel.Item className='carousel-item'>
                    <SectionCarouselContent imageSource={party1} caption="Awal G-Tech Party"/>
                </Carousel.Item>

                <Carousel.Item className='carousel-item'>
                    <SectionCarouselContent imageSource={party2} caption="Pertengahan G-Tech Party"/>
                </Carousel.Item>

                <Carousel.Item className='carousel-item'>
                    <SectionCarouselContent imageSource={party3} caption="Akhir G-Tech Party"/>
                </Carousel.Item>  
           </Carousel>
       </Col>
   </Container>
</div>
  )
}

export default party