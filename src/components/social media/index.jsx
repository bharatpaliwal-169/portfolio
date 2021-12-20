import React from 'react';
import {socialLinks} from '../../constants/data'; 
import './media.css'
export default function Links() {
  return (
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
  )
}
