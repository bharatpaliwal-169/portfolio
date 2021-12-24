import React from 'react'
import Tilt from 'react-tilt'

export default function Studies2() {
  return (
    <section className='row mt-5 mb-5'>
      <div className='col-12 col-md-5 offset-md-1'data-aos='fade-right'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
        <section className='ctmCard card bg-transparent'>
          <div className='card-header row'>
            <p className='mt-3 col-12 col-md-9 sub-heading'>All Saints Sr Sec School,Ajmer</p>
            <h5 className='mt-4 col-12 col-md-3 float-end'>2017-2018</h5>
            <p className=''>XII - CBSE</p>
          </div>
          <hr />
          <div className='card-body text-muted'>
            <p>
            ⚡ Completed higher school with Physics,Chemistry and Mathematics as majors. 
            </p>
          </div>
        </section>
        </Tilt>
      </div>
      <div className='col-12 col-md-5' data-aos='fade-left'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
        <section className='ctmCard card bg-transparent'>
          <div className='card-header row'>
            <p className='mt-3 col-12  col-md-9 sub-heading'>St Paul's Sr Sec School,Beawar</p>
            <h5 className='mt-4 col-12 col-md-3 float-end'>2015-2016</h5>
            <p className=''>X - CBSE</p>
          </div>
          <hr />
          <div className='card-body text-muted'>
            <p>
            ⚡ completed primary school, with Science and Mathematics as majors.
            </p>
          </div>
        </section>
        </Tilt>
      </div>
    </section>
  )
}
