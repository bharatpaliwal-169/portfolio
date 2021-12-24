import React from 'react'
import Tilt from 'react-tilt'
import {projectList} from '../../constants/Projects'

export default function List() {
  return (
    <div className='row mt-5 mb-5' data-aos='fade-up'>
      {projectList.map(project =>{
        return(
          <div className='col-12 col-md-6 p-4' id={project.title}>
            <Tilt options={{max:15, scale:1 , speed:300,reset:true , }}>
              <section className='ctmCard card bg-transparent'>
                <div className='card-header'>
                  <p className='mt-3 col-12 sub-heading'>{project.title}</p>
                </div>
                <div className='card-body text-muted'>
                  <p>
                  ⚡ {project.description} 
                  </p>
                  <div className="">
                    <p>Tech Stack :
                      {project.stack.map(item => {
                        return(
                          <>
                            <span class="badge rounded-pill bg-secondary m-2">{item}</span>
                          </>
                        )
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="card-footer p-4">
                  <a className='btn btn-md btn-light me-3' 
                    href={project.projectUrl} target="_blank" rel="noopener noreferrer" >
                    View
                  </a>
                  <a className='btn btn-md btn-outline-secondary' 
                    href={project.projectUrl} target="_blank" rel="noopener noreferrer" >
                    Github <i className="fab fa-github"></i>
                  </a>
                </div>
              </section>
            </Tilt>
          </div>
        )
      })}
    </div>
  )
}
