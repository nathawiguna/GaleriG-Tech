import React from 'react'
import { Container, Col, Carousel} from 'react-bootstrap';
import ephotech1 from '../assets/party-section/party_1.jpg'
import ephotech2 from '../assets/party-section/party_2.jpg'
import ephotech3 from '../assets/party-section/party_3.jpg'
import '../section.css'


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
                   <img
                   className="d-block w-50 h-40 image"
                   src={ephotech1}
                   alt="First slide"
                   />
                   <Carousel.Caption className='carousel-caption'>
                   <h3>Awal G-Tech Party</h3>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item className='carousel-item'>
                   <img
                   className="d-block w-50 h-40 image"
                   src={ephotech2}
                   alt="Second slide"
                   />

                   <Carousel.Caption className='carousel-caption'>
                   <h3>Pertengahan G-Tech Party</h3>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item className='carousel-item'>
                   <img
                   className="d-block w-50 h-40 image"
                   src={ephotech3}
                   alt="Third slide"
                   />

                   <Carousel.Caption className='carousel-caption'>
                   <h3>Akhir G-Tech Party</h3>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
       </Col>
   </Container>
</div>
  )
}

export default party