import React from 'react'
import Tilt from 'react-tilt'
import Coding from './coding'
import Say from './Say'
import Media from '../../components/social media'
import Me from '../../assets/images/upload.jpeg';
export default function contacts() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <section className='col-12 col-md-4 offset-md-1' data-aos='fade-up'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
          <img src={Me} alt="bharat" className='img-responsive img-fluid' />
        </Tilt>
        </section>
        <section className='col-12 col-md-6 text-center' data-aos='fade-up'>
          <div className='heading mt-5 mb-3'>
            <p>Contact Me</p>
          </div>
          <div className='text-muted'>
            <h5>Connect with me at the following plateforms, I'll communicate with you ASAP😊. </h5>
          </div>
          <Media></Media>
          <a className='btn btn-lg btn-outline-light' 
              href="https://drive.google.com/file/d/1o1ec8Jj8TB3LquMiE7b8Jm3wcIa7ygSb/view?usp=sharing" 
              target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </section>
      </div>
      <Say></Say>
      <Coding></Coding>
    </div>
  )
}
