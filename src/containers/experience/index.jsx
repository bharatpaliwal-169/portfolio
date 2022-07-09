import React from 'react'
import Typewriter from 'typewriter-effect'
import work from '../../assets/images/work.gif'
import TimeLine from './Timeline';
export default function Exp() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <section className='col-12 col-md-4 offset-md-1'>
          <img src={work} alt="work" className="img-responsive img-fluid" />
        </section>
        <section className='col-12 col-md-6'>
          <div className='text-center mt-5 mb-3 heading'>
            <p>Experience</p>
          </div>
          <div className='text-center sub-heading mt-2 mb-2'>
            <Typewriter
                options={{
                  strings: ['Work', 'Internships',
                  'Volunteership'],
                  autoStart: true,
                  loop: true,
                }}
              />
          </div>
          <div className='text-muted'> 
            <ul>
              <li>
              ⚡ I'm currently doing SLI as Product Development Engineer Trainee @Comviva.
              </li>
              <li>
              ⚡ I love to communicate and I'm up for healthy discussion over technology and life.
              </li>
              <li>
              ⚡ I love building new tech projects and I work hard and smart to achieve my goals.
              </li>
              <li>
              ⚡ Google, StackOverFlow and Github are my best buddies. 
              </li>
            </ul>
          </div>
        </section>
      </div>
      <TimeLine></TimeLine>
    </div>
  )
}
