import React from 'react'
import Stackimg from '../../assets/images/pro-2.svg';
import {stackLinks} from '../../constants/stack';
export default function stack() {
  return (
    <div className="row" data-aos='fade-up'>
      <section className='col-12 heading mt-5 mb-5 text-center'>
        <p> Have a glance on tools I use</p>
      </section>
      <section className='col-12 col-md-5 offset-md-1' data-aos='fade-up'>
        <div className="row">
          {stackLinks.map( (item,index) => {
            return (
              <>
              <div className="col-2 p-2 m-1" key={index}>
                  <img src={item.img} alt={item.name} className="img-responsive img-fluid" />
              </div>
              </>
            )
          })}
        </div>
      </section>
      <section className='col-12 col-md-5' data-aos='fade-up'>
        <img src={Stackimg} alt="loading..."  className="img-responsive img-fluid" />
      </section>
    </div>
  )
}
