import React from 'react'
import Edu from '../../assets/images/pro-3.svg'
import Studies from './Studies'
import Certifications from './Certifications'
export default function Education() {
  return (
    <div className="container-fluid">
      <div className="row" data-aos='fade-up'>
        <section className="col-12 col-md-4 offset-md-1">
          <img src={Edu} alt="loading" className="img-responsive img-fluid" />
        </section>
        <section className='col-12 col-md-6 text-center mt-5'>
          <h1 className="heading mb-5">Education</h1>
          <h4>Basic Qualifications and Certifications</h4>
          <p  className='text-muted mt-4'>
            I always strived to be the better than my previous version of myself 
            be it acadmics, professional or personal life. <br></br>
            Here are some information regarding my qualifications.
          </p>
        </section>
      </div>

      <Studies></Studies>
      <Certifications></Certifications>
    </div>
  )
}
