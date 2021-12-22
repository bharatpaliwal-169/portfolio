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
          <section className="col-12 col-md-5 offset-md-1  mt-5 ">
            <h1>
            Hello 👋,  
            </h1>
            <h3>
              I'm <span className='intro'>Bharat Paliwal </span>
              Front-end Developer, <br/>
              Active Learner and Explorer🔥
            </h3>
            <Media />
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
