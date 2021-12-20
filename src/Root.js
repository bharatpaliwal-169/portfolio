import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Landing from './containers/landing'
import Education from './containers/education'
import Experience from './containers/experience'
import Projects from './containers/projects'
import Contact from './containers/contact'
export default function Root() {
  return (
    
      <div className='wrapper'>
        <Switch>
          <Route exact path='/'>
            <Redirect to ='/home'></Redirect>
          </Route>
          <Route exact path="/home">
            <Landing />
          </Route>

          <Route exact path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          
        </Switch>
      </div>
  )
}