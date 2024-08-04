import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import sree from '../assets/images/sreee image.png'

import backgroundImage from '../assets/images/portfolio-background.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import react from '../assets/images/react.png'
import pdf from '../assets/pdf/Sreelakshmi.T.pdf'
import Aos from 'aos'
import Projects from './Projects'
import { Button } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_917xuly', 'template_q0gk6lg', form.current, {
        publicKey: 'DvWot8jAdqul91d7Q',
      })
      .then(
        () => {
          toast.success("Successfull send Your Email")
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.warning("Some Error to Send Mail")
        },
      );
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    Aos.init();
  }, [])


  return (
    <>
      {/* home */}
      <div id='navbar' className='home' style={{ color: "white", backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        <Header />
        <div className='ContainerHome container '>
          <div className="row align-items-center">
            <div className="col-lg-6 text-white" data-aos="fade-right" data-aos-duration="2000">
              <h2 >HI,I'AM</h2>
              <br />
              <h1 className='name'>SREELAKSHMI.T</h1>
              <br />
              <h5 className='d-flex '>I'AM A : <span className='text-warning ps-2 text-uppercase'><Typewriter
                options={{
                  strings: ['Frontend Developer', 'Full Stack Developer', 'React Developer', 'Angular Developer'],
                  autoStart: true,
                  loop: true,
                }}
              /></span></h5>
              <p className='mt-3'>I Am A Skilled And Passionate Web Developer With Experience In Dealing With Programming And Modern Web Technologies, And I Have Built A Lot Of Projects That Have Increased My Experience And Trained A Lot, I Am A Fast Learner And Always Love To Develop Myself.</p>
              <div className='d-flex mt-4'>
                <a id="download" href={pdf} className='dwld btn  me-5  p-2 fw-bolder mt-3' download>DOWNLOAD CV <i class="fa-solid fa-download"></i></a>
              </div>
            </div>

            <div className="col-lg-6 text-center " data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000" >
              {/* <img className=' w-75  bg-dark rounded-circle' src={sree} alt="imgintro" /> */}
              <img className=' w-100' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif " alt="imgintro" />
            </div>
          </div>

        </div>
      </div>
      {/* home end */}
      <marquee behavior="" direction="left" scrollamount="12" className='movingelemrnt d-flex' style={{ color: "white", backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

        <img style={{ height: '60px', width: '100px' }} src={html} alt="" />
        <img style={{ height: '60px', width: '100px' }} src={css} alt="" />
        <img style={{ height: '90px', width: '90px' }} src="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src={react} alt="" />
        <img style={{ height: '65px', width: '65px' }} className='ms-4' src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="" />
        <img style={{ height: '80px', width: '70px' }} className='ms-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" />
        <img style={{ height: '70px', width: '70px' }} className='ms-4' src="https://camo.githubusercontent.com/4c404ee3b9f73190f23c194c889274fdb43314d4d767a786eed8e8a117c8f062/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67" alt="" />
        <img style={{ height: '70px', width: '70px' }} className='ms-4' src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="" />
        <img style={{ height: '50px', width: '90px' }} className='ms-4' src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="" />

        {/* copy */}
        <img style={{ height: '60px', width: '100px' }} src={html} alt="" />
        <img style={{ height: '60px', width: '100px' }} src={css} alt="" />
        <img style={{ height: '90px', width: '90px' }} src="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src={react} alt="" />
        <img style={{ height: '65px', width: '65px' }} className='ms-4' src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="" />
        <img style={{ height: '80px', width: '70px' }} className='ms-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" />
        <img style={{ height: '70px', width: '70px' }} className='ms-4' src="https://camo.githubusercontent.com/4c404ee3b9f73190f23c194c889274fdb43314d4d767a786eed8e8a117c8f062/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67" alt="" />
        <img style={{ height: '70px', width: '70px' }} className='ms-4' src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="" />
        <img style={{ height: '50px', width: '90px' }} className='ms-4' src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="" />
        {/* copy */}


        {/* copy */}
        <img style={{ height: '60px', width: '100px' }} src={html} alt="" />
        <img style={{ height: '60px', width: '100px' }} src={css} alt="" />
        <img style={{ height: '90px', width: '90px' }} src="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src={react} alt="" />
        <img style={{ height: '65px', width: '65px' }} className='ms-4' src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="" />
        <img style={{ height: '80px', width: '70px' }} className='ms-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
        <img style={{ height: '60px', width: '60px' }} className='ms-4' src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" />
        <img style={{ height: '70px', width: '70px' }} className='ms-4' src="https://camo.githubusercontent.com/4c404ee3b9f73190f23c194c889274fdb43314d4d767a786eed8e8a117c8f062/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67" alt="" />
        <img style={{ height: '70px', width: '70px' }} className='ms-4' src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="" />
        <img style={{ height: '50px', width: '90px' }} className='ms-4' src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="" />
        {/* copy */}

      </marquee>
      {/* about me */}
      <div id='aboutme' className='home pb-4 w-100 h-100' style={{ color: "white", backgroundImage: `url('https://wallpapercave.com/wp/wp2757874.gif')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        <h2 data-aos="fade-left" data-aos-duration="1000" className='aboutmeheading fw-bolder text-center pt-5'>About <span style={{ color: 'rgb(242, 97, 6)' }}>Me </span> </h2>
        <div className="ContainerHome1 container pb-5">
          <div className="row">
            <div className="col-lg-6">
              <img data-aos="fade-right" data-aos-offset="300"
                data-aos-easing="ease-in-sine" data-aos-duration="1000" className='w-100 h-100 ' src="https://indcatech.com/wp-content/uploads/2023/11/sardonyx-softwaredevelopment001.gif" alt="" />
            </div>
            <div data-aos="fade-up"
              data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="aboutcol col-lg-6 ">
              <h5 className='d-flex'>MY NAME IS SREELAKSHMI T <span className='typewritingcss text-warning text-uppercase ps-2'><Typewriter
                options={{
                  strings: ["I'M A FRONTEND DEVELOPER", "I'M A Full Stack Developer", "I'M A React Developer", "I'M A Angular Developer"],
                  autoStart: true,
                  loop: true,
                }}
              /></span></h5>
              <p className='mt-4'> 
                As a developer, I am driven by a passion for creating
                innovative solutions that push the boundaries of what's possible in
                web development. I am committed to delivering high-quality, user-friendly, and aesthetically pleasing websites. I enjoy the process of transforming ideas into digital experiences and am always eager to learn new technologies and techniques. Whether it's crafting a seamless user interface or building robust back-end systems, I approach every project with enthusiasm and dedication.
                <br /> <br />
                I'm always eager to learn new things and take on new challenges. Let's connect and work on something great together!

             
              </p>
              <a onClick={handleShow}  className='dwld btn  text-light fw-bolder' >Read More <i class="fa-solid fa-arrow-right ms-1"></i> </a>

              <Modal
                scrollable={true}
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
              >

                <Modal.Header style={{ backgroundImage: `url('https://cdn.dribbble.com/users/149180/screenshots/3137225/particles.gif')` }} closeButton>
                  <Modal.Title>About Me </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{
                  backgroundImage: `url('https://cdn.dribbble.com/users/149180/screenshots/3137225/particles.gif')`, maxHeight: 'calc(90vh - 210px)',
                  overflowY: 'auto'
                }}>
                  <div className='row '>
                    <div className="col-lg-3 modlrow fw-bolder ">
                      EDUCATION
                    </div>
                    <div className="col-lg-9  ">
                      <div className='vl ps-2'>
                        <b>
                          Universal College Of Arts And Science, Mannarkkad—<br />
                          <i> B.COM(Computer Application) Calicut University </i><br />
                        </b>
                        APRIL 2019 - MARCH 2022 <br /><br />
                        <b>
                          MET EM HSS, Mannarkkad— <br />
                          <i> PLUS TWO Commerce (Computer Application)</i> <br />
                        </b>
                        APRIL 2017 - MARCH 2019<br /><br />
                        <b>
                          K.H.S Kumaramputhur, Mannarkkad—  <br />
                          <i> SSLC</i><br />
                        </b>
                        APRIL 2016 - MARCH 2017<br />
                      </div>
                    </div>
                  </div>
                  <div className='row '>
                    <div className="col-lg-3 modlrow fw-bolder ">
                      CERTIFICATION COURSE
                    </div>
                    <div className="col-lg-9  ">
                      <div className='vl1 ps-2'>
                        <b>
                          National Council for Technology & Training
                          (NACTET) Certification in MEA(R)N STACK <br />
                          <i>WEB DEVELOPMENT - ANGULAR & REACT</i> <br /> </b>
                        (Nov 2023 - June 2024) Luminar Technolab,
                        Kochi <br /><br />

                        <b>
                          Post Graduate Diploma Certification
                          (PGDCA) in COMPUTER APPLICATION <br />
                        </b>
                        (2022 - 2023) ICS INDIA, Mannarkkad.
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer style={{ backgroundImage: `url('https://cdn.dribbble.com/users/149180/screenshots/3137225/particles.gif')` }}>
                  <Button variant="warning" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      {/* skills */}
      <div id='skills' className='home' style={{ color: "white", backgroundColor: 'black' }} >
        <h2 data-aos="flip-left" data-aos-duration="1000" className='aboutmeheading fw-bolder text-center pt-5'>My <span style={{ color: 'rgb(242, 97, 6)' }}>Skills</span></h2>
        <div className="skills container pb-5 mt-5">
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='sections border rounded p-5 bg-dark '><img style={{ height: '100px', width: '150px' }} src={html} alt="" /></div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" data-aos-delay="300" className='sections border rounded pt-5 pb-5 ps-5 pe-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src={css} alt="" /></div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" data-aos-delay="300" className=' sections border rounded pt-5 pb-5 ps-5 pe-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="" /></div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" data-aos-delay="300" className='sections border rounded pt-5 pb-5 ps-5 pe-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" /></div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" data-aos-delay="300" className='sections border rounded  pt-5 pb-5 ps-5 pe-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src={react} alt="" /></div>





          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='sections border rounded   pt-5 pb-5 ps-5 pe-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="" /></div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" data-aos-delay="300" className='sections border rounded p-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="" /></div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" data-aos-delay="300" className='sections border rounded  pt-5 pb-5 ps-5 pe-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" /></div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" data-aos-delay="300" className='sections border rounded  pt-5 pb-5 ps-5 pe-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" /></div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" data-aos-delay="300" className='sections border rounded  pt-5 pb-5 ps-5 pe-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="" /></div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" data-aos-delay="300" className='sections border rounded  pt-5 pb-5 ps-5 pe-5 bg-dark'><img style={{ height: '100px', width: '150px' }} src="https://camo.githubusercontent.com/4c404ee3b9f73190f23c194c889274fdb43314d4d767a786eed8e8a117c8f062/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f382f38382f5374617475735f6975636e5f45585f69636f6e2e7376672f34383070782d5374617475735f6975636e5f45585f69636f6e2e7376672e706e67" alt="" /></div>
        </div>
      </div>
      {/* projects */}
      <div id='projects' className='home w-100 h-100 pb-5' style={{ color: "white", backgroundImage: `url('https://wallpapercave.com/wp/wp2757874.gif')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        <h2 data-aos="fade-up" data-aos-duration="2000" className='aboutmeheading fw-bolder text-center pt-5 pb-5'>My <span style={{ color: 'rgb(242, 97, 6)' }}>Projects</span> </h2>
        <Projects />
      </div>
      <div id='contactme' className='home' style={{ color: "white", backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
        <h2 data-aos="fade-down" data-aos-duration="2000" className='aboutmeheading fw-bolder text-center pt-5 pb-5 m-0'>Contact<span style={{ color: 'rgb(242, 97, 6)' }}> Me</span> </h2>
        <form className="contactinput container bg-dark align-items-center p-5 text-dark mb-5" ref={form} onSubmit={sendEmail}>
          <input type="text" className='namee' placeholder='Your Name' name='your_name' />
          <input type="email" className='email' placeholder='Your Email' name='your_email' />
          <textarea name="message" className='msg' placeholder='Your Message' id="" />
          <button type="submit" value="Send" style={{ backgroundColor: 'rgb(242, 97, 6)' }} className='btn mt-3 text-light fw-bolder ps-5 pe-5 text-center'>Submit</button>
        </form>
        <div className='contact'>
          <div className='d-flex '>
            <div class="icon">
              <a href="https://www.linkedin.com/in/sreelakshmi-t-49b402266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i class="fa-brands fa-linkedin-in brand"></i></a>
            </div>
            <div class="icon">
              <a href="https://github.com/Sreelakshmit123" target="_blank"><i class="fa-brands fa-github brand"></i></a>
            </div>
            <div class="icon">
              <a href="https://wa.me/qr/RT5AOGUYGRHMF1" target="_blank"><i class="fa-solid fa-envelope brand"></i></a>
            </div>
          </div>
          <p className='copyright mt-3'>&copy; My Portfolio Website 2024, All Rights Reseved &reg; Sreelakshmi T</p>
        </div>
        <div className="up-arrow icon">
          <a href="#navbar"><i class="fa-solid fa-angle-up brand"></i></a>
        </div>
        <ToastContainer autoClose={3000} theme='colored' />
      </div>

    </>
  )
}

export default Home
