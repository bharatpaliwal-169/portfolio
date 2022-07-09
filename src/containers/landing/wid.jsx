import React from 'react'
import Fs from '../../components/svgs/fs'
export default function wid() {
  return (
    <div className="row">
      <div className="heading text-center mt-5 mb-5" data-aos='fade-up'>
        <p> Here's What I do </p>
      </div>
      <section className="col-12 col-md-4 offset-md-1" data-aos='fade-up'>
        <Fs></Fs>
      </section>

      <section className="col-12 col-md-6" data-aos='fade-up'>
        <ul>
          <li>
            ⚡ Build highly interactive and Responsive UI for software applications.
          </li>
          <li>
            ⚡ Builds PWA website/webapps using MERN Stack.
          </li>
          <li>
            ⚡ Love to solve real-life problems using code.
          </li>
          <li>
            ⚡ Exploreing latest tools n technology.
          </li>
        </ul>
      </section>
    </div>
  )
}
