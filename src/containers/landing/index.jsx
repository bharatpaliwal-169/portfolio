import React from 'react';
import Typewriter from 'typewriter-effect';
import Greet from '../../assets/images/try.gif'
import Media from '../../components/social media';
import Wid from './wid';
import Stack from './stack'
import './landing.css';

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" data-aos='fade-up'>
          <section className="col-12 col-md-5 offset-md-1  mt-5 " >
            <h1 className='mb-3'>
            Hello 👋,  
            </h1>
            <h3 className='mb-5'>
              I'm <span className='intro'>Bharat Paliwal </span>
              <br />
              <br />
              <Typewriter
                options={{
                  strings: ['Front-end Developer', 'Competitive Programmer',
                  'Software Developement Enthusiast'],
                  autoStart: true,
                  loop: true,
                }}
              />
              <br/>
              Active Learner and Explorer🔥
            </h3>
            <Media />
            <a className='btn btn-lg btn-outline-light'href="/contact"rel="noopener noreferrer" >
              Contact Me
            </a>
            
          </section>
          
          <section className="col-12 col-md-5">
            {/* <Greeting></Greeting> */}
            <img src={Greet} alt="Hello" className='img-responsive img-fluid greet' />
          </section>
        </div>
        <Wid></Wid>
        <Stack></Stack>
      </div>
    </>
  )
}
