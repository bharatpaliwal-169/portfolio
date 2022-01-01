import React,{useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';


import Navbar from './components/Navbar';
import Root from './Root';
import Footer from './components/Footer';
import BTP from './components/BTP';
import './Global.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000,
    });
    AOS.refresh();
  }, []);
  
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Root />
        <BTP></BTP>
        <Footer></Footer>
      </div>
    </Router>
  )
}
