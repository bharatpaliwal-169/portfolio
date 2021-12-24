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
              ⚡ I've completed 2 internships in summer'21.
              </li>
              <li>
              ⚡ I've mostly build projects on my own and I am actively looking for good SDE opportunities.
              </li>
              <li>
              ⚡ I love to share my knowledge with others and I am open for healthy discussion over technology and life.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <TimeLine></TimeLine>
    </div>
  )
}
