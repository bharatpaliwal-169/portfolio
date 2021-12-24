import React from 'react'
import { codingLinks  } from '../../constants/Links'
import binary from '../../assets/images/Typing-bro.svg'
export default function coding() {
  return (
    <div className='row mt-5'>
      <section className='col-12 text-center mb-5 heading'>
        Coding Plateforms Profiles 
      </section>
      
      <section className='col-12 col-md-7 text-center'>
        <div className="row">
          {codingLinks.map((item)=>{
            return(
              <div className='col-12 mt-5 mb-5'>
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
      <section className='col-12 col-md-4 '>
        <img src={binary} alt="loading" className='img-responsive img-fluid' />
      </section>

    </div>
  )
}
