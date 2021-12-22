import React from 'react';
import {socialLinks} from '../../constants/Links';
import './media.css'
export default function Links() {
  return (
    <>    
    <div>
      <div className="social-media-div">
        <a
          href={socialLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
        <a
          href={socialLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
        <a
          href={socialLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
        <a
          href={`mailto:${socialLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-google"></i>
          <span></span>
        </a>
        <a
          href={socialLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      </div>
    </div>
    <br />
    <div className='text-left ml-10 '>
        <a className='btn btn-lg btn-primary p-3'href="/contact"rel="noopener noreferrer" >
          Contact Me
        </a>
    </div>
    </>
  )
}
