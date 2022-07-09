import React from 'react'
import ProjectIntro from '../../assets/images/code_main.gif'
import List from './List'
export default function Projects() {
  return (
    <div className='container-fluid'>
      <div className="row" data-aos='fade-up'>
        <div className="col-12 col-md-4 offset-md-1">
          <img src={ProjectIntro} alt="intro" className='img-responsive img-fluid' />
        </div>

        <div className="col-12 col-md-6">
          <div className='heading mt-5 mb-4 text-center'>
            <p>Projects</p>
          </div>
          <div className="text-muted text-justify">
            <h5>
              I build projects using latest technology and tools. <br />
              I have Projects in MERN Stack,Java Stack and Django-Python Stack. 
              I master Bootstrap and pratice UI development using material-ui, tailwandCSS too. 
              I also have hands-on experience using RDBMS(MySql,PostgreSQL) and MongoDB. 
            </h5>
          </div>
        </div>
      </div>

      <List></List>
      <div className="row mt-5 mb-5">
        <div className="col-12 text-center">
          <a className='btn btn-md btn-outline-light bg-gradient' 
            href='https://github.com/bharatpaliwal-169' target="_blank" rel="noopener noreferrer" >
            More Projects <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
