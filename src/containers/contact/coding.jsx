import React from 'react'
import { codingLinks  } from '../../constants/Links'
import binary from '../../assets/images/Typing-bro.svg'
export default function coding() {
  return (
    <div className='row mt-5'>
      <section className='col-12 text-center mb-5 heading' data-aos = 'fade-up'>
        Coding Plateforms Profiles 
      </section>
      
      <section className='col-12 col-md-7 text-center mt-5' data-aos = 'fade-up'>
        <div className="row">
          {codingLinks.map((item)=>{
            return(
              <div className='col-12 mt-3 mb-3'>
                <section>
                  <a href={item.url} className='btn btn-lg btn-outline-light' 
                  target="_blank" rel="noopener noreferrer" >
                    {item.name}
                  </a>
                </section>
              </div>
            )
          })}
        </div>
      </section>
      <section className='col-12 col-md-4' data-aos='fade-up'>
        <img src={binary} alt="loading" className='img-responsive img-fluid' />
      </section>

    </div>
  )
}
