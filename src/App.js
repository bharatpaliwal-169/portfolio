import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';


import Navbar from './components/Navbar';
import Root from './Root';
import Footer from './components/Footer';
import './Global.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(defaultTheme); 
  useEffect(() => {
    AOS.init({
      duration : 2000,
    });
    AOS.refresh();
  }, []);
  
  return (
    <Router>
      <div className='app' data-theme={theme}>
        <Navbar Theme={theme} setTheme={setTheme} />
        <Root />
        <Footer></Footer>
      </div>
    </Router>
  )
}
