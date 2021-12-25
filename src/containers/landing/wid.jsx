import React from 'react'
import Fs from '../../components/svgs/fs'
export default function wid() {
  return (
    <div className="row">
      <div className="heading text-center mt-5 mb-5"data-aos='fade-up'>
        <p> Here's What I do </p>
      </div>
      <section className="col-12 col-md-4 offset-md-1" data-aos='fade-up'>
        <Fs></Fs>
      </section>

      <section className="col-12 col-md-6" data-aos='fade-up'>
        <ul>
          <li>
            ⚡ Develop highly interactive Frontend UIs for web and mobile applications.
          </li>
          <li>
            ⚡ Building responsive website front end using ReactJS.
          </li>
          <li>
            ⚡ Creating application backend in Node, Express & django.
          </li>
          <li>
            ⚡ CI/CD using third party services such as Firebase/ Heroku / Netlify.
          </li>
        </ul>
      </section>
    </div>
  )
}
