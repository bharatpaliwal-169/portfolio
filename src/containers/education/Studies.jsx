import React from 'react'
import Tilt from 'react-tilt';
import Schools from './Studies2'

import Clg from '../../assets/images/Clg_logo.png';

export default function Studies() {
  return (
    <>
    <div className='row'>
      <section className='col-12 heading mt-5 mb-5 text-center' data-aos='fade-up'>
        <p>Acadmics</p>
      </section>
      
      <div className='col-12 col-md-3 offset-md-1 mt-3' data-aos='fade-in'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
          <img src={Clg} alt="loading" className='img-responsive img-fluid rounded' />
        </Tilt>
      </div>

      <div className='col-12 col-md-7 m-2'data-aos='fade-up'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
        <section className='ctmCard card bg-transparent'>
          <div className='card-header row'>
            <p className='mt-3 col-12 col-md-8 sub-heading'>The LNM Institute of Information Technology</p>
            <p className='mt-4 col-12 col-md-3 float-end ms-md-5'>2018 - Present</p>
            <p className=''>B.tech ECE</p>
          </div>
          <hr />
          <div className='card-body text-muted'>
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
