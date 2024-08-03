import React, { useEffect } from 'react'
import Aos from 'aos'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mern from '../assets/images/mern project.png'
import mediaplayer from '../assets/images/mediaplayer.png'
import quizapp from '../assets/images/QuizApp.png'
import htmlcss from '../assets/images/htmlcss.png'
import parallaxwebsite from '../assets/images/parllaxwebsite.png'
import mean from '../assets/images/mean.png'

function Projects() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>

      <Container className=' pb-5'>


        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row className=' mb-3'>
          <Col className='containerr' xs={12} md={4}>
            <img className='ni-img w-100 h-100 rounded ' src={mern} alt="" />
            <div class="middle" >
              <div class="text rounded" >
                <p class="text-light fw-bold  m-0">MERN Recipe Website</p>
                <div className='d-flex '>
                  <a target='_blank' href='https://mern-frontend-ujdh.vercel.app/'><i class="fa-solid fa-link text-light  pe-3 pt-3  fs-2"></i></a>
                  <a target='_blank' href='https://github.com/Sreelakshmit123/MERN-FRONTEND'><i class="fa-brands fa-github text-light   pe-3 pt-3  fs-2"></i></a>
                </div>
              </div>
            </div>
          </Col>
          <Col className='containerr' xs={6} md={4}>
            <img className='w-100 h-100 rounded' src={mediaplayer} alt="" />
            <div class="middle">
              <div class="text1 rounded">
                <p class="text-light fw-bold m-0">Media Player using Redux</p>
                <div className='d-flex '>
                  <a target='_blank' href='https://media-player-rouge.vercel.app/'><i class=" fa-solid fa-link text-light   pe-3 pt-3  fs-2"></i></a>
                  <a target='_blank' href='https://github.com/Sreelakshmit123/MediaPlayer'><i class=" fa-brands fa-github text-light   pe-3 pt-3  fs-2"></i></a>
                </div>
              </div>
            </div>
          </Col>
          <Col className='containerr' xs={6} md={4}>
            <img className='w-100 h-100 rounded' src={quizapp} alt="" />
            <div class="middle">
              <div class="text1 rounded">
                <p class="text-light fw-bold  m-0">Quiz App </p>
                <div className='d-flex '>
                  <a target='_blank' href='https://quiz-app-pied-gamma.vercel.app/'><i class="fa-solid fa-link text-light   pe-3 pt-3  fs-2"></i></a>
                  <a target='_blank' href='https://github.com/Sreelakshmit123/Quiz-App'><i class="fa-brands fa-github text-light   pe-3 pt-3  fs-2"></i></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col className='containerr' xs={12} md={4}>
            <img className='w-100 h-100 rounded' src={mean} alt="" />
            <div class="middle">
              <div class="text rounded">
                <p class="text-light fw-bold  m-0">Recipe Website Using Angular (MEAN)</p>
                <div className='d-flex '>
                  <a target='_blank' href='https://mean-project-frontend.vercel.app/'><i class="fa-solid fa-link text-light   pe-3 pt-3  fs-2"></i></a>
                  <a target='_blank' href='https://github.com/Sreelakshmit123/MEAN-project-frontend'><i class="fa-brands fa-github text-light   pe-3 pt-3  fs-2"></i></a>
                </div>
              </div>
            </div>
          </Col>
          <Col className='containerr' xs={6} md={4}>
            <img className='w-100 h-100 rounded' src={parallaxwebsite} alt="" />
            <div class="middle">
              <div class="text1 rounded">
                <p class="text-light fw-bold  m-0">Restaurant Website using Parallax</p>
                <div className='d-flex '>
                  <a target='_blank' href='https://restaurant-drab-iota.vercel.app/'><i class="fa-solid fa-link text-light   pe-3 pt-3  fs-2"></i></a>
                  <a target='_blank' href='https://github.com/Sreelakshmit123/Restaurant-'><i class="fa-brands fa-github text-light   pe-3 pt-3  fs-2"></i></a>
                </div>
              </div>
            </div>
          </Col>
          <Col className='containerr' xs={6} md={4}>
            <img className='w-100 h-100 rounded' src={htmlcss} alt="" />
            <div class="middle">
              <div class="text1 rounded">
                <p class="text-light fw-bold  m-0">Travel-Tour Website Using HTML, CSS, BOOTSTRAP WITH ANIMATIONS</p>
                <div className='d-flex '>
                  <a target='_blank' href='https://valettravel-website.netlify.app/'><i class="fa-solid fa-link text-light   pe-3 pt-3  fs-2"></i></a>
                  <a target='_blank' href='https://github.com/Sreelakshmit123/Travel-Website'><i class="fa-brands fa-github text-light   pe-3 pt-3  fs-2"></i></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>



      </Container>

    </>
  )
}

export default Projects