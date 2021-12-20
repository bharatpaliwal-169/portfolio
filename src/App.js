import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Root from './Root';
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
export default function App() {
  const [theme,setTheme] = useState(true);
  useEffect(() => {
    AOS.init({
      duration : 2000,
    });
    AOS.refresh();
  }, []);
  
  return (
    <Router>
      <div className={theme ? 'dark' : ''}>
        <div className="dark:bg-gray-900 bg-gray-100 dark:text-zinc-100 min-h-screen">
          <Navbar setTheme={setTheme} Theme={theme}></Navbar>
          <Root />
        </div>
      </div>
    </Router>
  )
}
