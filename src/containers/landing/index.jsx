import React from 'react';
import Greeting from '../../components/Greetings'
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
              Front-end Developer, <br/>
              Active Learner and Explorer🔥
            </h3>
            <Media />
            <div className='text-left ml-10 mt-3'>
              <a className='btn btn-lg btn-outline-light p-md-3 ms-md-5'href="/contact"rel="noopener noreferrer" >
                Contact Me
              </a>
            </div>
          </section>
          
          <section className="col-12 col-md-5">
            <Greeting></Greeting>
          </section>
        </div>
        <Wid></Wid>
        <Stack></Stack>
      </div>
    </>
  )
}
