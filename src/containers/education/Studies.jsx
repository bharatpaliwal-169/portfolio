import React from 'react'
import Tilt from 'react-tilt';
import Schools from './Studies2'
import './edu.css'
import Clg from '../../assets/images/Clg_logo.png';

export default function Studies() {
  return (
    <>
    <div className='row'>
      <section className='col-12 heading mt-5 mb-5 text-center' data-aos='fade-up'>
        <p>Acadmics</p>
      </section>
      
      <div className='col-4 col-md-3 offset-md-1' data-aos='fade-right'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
          <img src={Clg} alt="loading" className='img-responsive img-fluid rounded' />
        </Tilt>
      </div>

      <div className='col-6 col-md-7'data-aos='fade-left'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
        <section className='ctmCard card bg-transparent'>
          <div className='card-header row'>
            <p className='mt-4 col-8 sub-heading'>The LNM Institute of Information Technology</p>
            <p className='mt-4 col-3 float-end ms-5'>2018 - Present</p>
            <p className='text-muted'>B.tech ECE</p>
          </div>
          <hr />
          <div className='card-body'>
            <p>
            ⚡ Currently pursuing my batchlors in Electronic and Communications.
            </p>
          </div>
        </section>
        </Tilt>
      </div>
    </div>
    <Schools></Schools>
    </>
  )
};
