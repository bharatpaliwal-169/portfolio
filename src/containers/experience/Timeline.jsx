import React from 'react'
import Tilt from 'react-tilt'
export default function Timeline() {
  return (
    <div className='row mt-5'>
      <section className='col-12 col-md-10 offset-md-1' data-aos='fade-up'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
          <section className='ctmCard card bg-transparent'>
            <div className='card-header row'>
              <p className='mt-3 col-12  col-md-9 sub-heading'>Mahindra Comviva</p>
              <h5 className='mt-4 col-12 col-md-3 float-end'>Jan 2022-Present</h5>
              <p className=''>Product Development Engineer Trainee</p>
            </div>
            <hr />
            <div className='card-body text-muted'>
              <p>
              ⚡ Currently, I'm interning here as PDE trainee. Learning and enhancing Real-life major projects.
              </p>
            </div>
          </section>
          </Tilt>
      </section>

      <section className='col-12 col-md-10 offset-md-1 mt-5' data-aos='fade-up'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
          <section className='ctmCard card bg-transparent'>
            <div className='card-header row'>
              <p className='mt-3 col-12  col-md-9 sub-heading'>KeywordsFly Pvt Ltd</p>
              <h5 className='mt-4 col-12 col-md-3 float-end'>2 Months</h5>
              <p className=''>Frontend Developer Intern</p>
            </div>
            <hr />
            <div className='card-body text-muted'>
              <p>
              ⚡ I had a good experience with how we work and coordinate as a team and build projects within given deadlines. 
              <br />
              ⚡ I explored react.js and its application in variety of application assignments given during this period.
              <br />
              ⚡ I majorly worked over converting wire-frames into high quality, reusable and clean react
                code. 
              <br />
              ⚡ I used functional components and css frameworks to build complex UI and improved UX of given tasks.
              </p>
            </div>
          </section>
          </Tilt>
        </section>

        <section className='col-12 col-md-10 offset-md-1 mt-5 mb-5' data-aos='fade-up'>
        <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
          <section className='ctmCard card bg-transparent'>
            <div className='card-header row'>
              <p className='mt-3 col-12  col-md-9 sub-heading'>SpotRental Pvt Ltd</p>
              <h5 className='mt-4 col-12 col-md-3 float-end'>2 Months</h5>
              <p className=''>Software Developer Intern</p>
            </div>
            <hr />
            <div className='card-body text-muted'>
              <p>
              ⚡ During the internship tenure, I explored basics of both frontend and backend development. 
              <br />
              ⚡ I was assigned with the tasks to build and deploy multiple
                static websites for their products and services. 
              <br />
              ⚡ I also developed a query-application in Django for their major project. 
              <br />
              ⚡ I also explored the best practices required to improve SEO scores and build PWA applications.
              </p>
            </div>
          </section>
          </Tilt>
      </section>
      
      <div className='col-12 text-center mt-5 mb-5'>
        <a href="https://www.linkedin.com/in/bharat-paliwal-ab7169179/" 
        target="_blank" rel="noopener noreferrer"
        className='btn btn-lg btn-outline-light bg-gradient'>
          Know more
        </a>
      </div>
    </div>
  )
}
