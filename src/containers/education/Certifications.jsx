import React from 'react'
import Tilt from 'react-tilt'
import {certificates} from '../../constants/Certificate'
import './edu.css'
export default function Certifications() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <section className='col-12 heading text-center  mt-5 mb-5' data-aos='fade-up'>
          <p>Certifications</p>
        </section>

        <section className='col-12' data-aos='zoom-in'>
          <div className='row'>
            {certificates.map( item => {
              return(
                <div className='col-2 col-md-4 p-3'>
                  <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
                    <section className='ctmCard card bg-transparent'>
                      <div className='card-header m-0 p-0'>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" >
                          <img src={item.img} alt="loading" className="img-fluid img-responsive rounded" />
                        </a>
                      </div>
                      <div className='card-body'>
                        <div className='card-title sub-heading'>{item.name}</div>
                          <hr />
                      
                        <div className="card-text">
                          
                          <p>
                            Key Skills : 
                            {item.skills.map(x => {
                              return <span class="badge rounded-pill bg-secondary m-2">{x}</span>
                            })}
                          </p>
                        </div>
                      </div>
                    </section>
                  </Tilt>
                </div>
              )
            })}
          </div>
        </section>

      </div>
      
    </div>
  )
}
