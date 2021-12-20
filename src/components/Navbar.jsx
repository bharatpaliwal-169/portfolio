import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar({Theme,setTheme}) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center  px-5 py-5
          bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-100 mb-3">

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">

          <div className="w-full relative flex justify-between lg:w-auto lg:static 
            lg:block lg:justify-start" >
            <a
              className="font-bold leading-relaxed inline-block mr-4 py-2 
                whitespace-nowrap"
              href="/"
            >
              <span className="text-2xl">
                Bharat.P()
              </span>
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-2 py-5 border 
              border-solid border-transparent rounded bg-transparent block 
              lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto 
              text-center text-xl leading-snug font-bold">
              <li className="nav-item dark:hover:bg-sky-500 dark:hover:rounded-lg ">
                <a
                  className="px-3 py-2 flex items-center"  
                  href="/home"
                >
                  <span className=" ml-5 mr-5 ">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center dark:hover:bg-sky-500 
                  dark:hover:rounded-lg "
                  href="/education"
                >
                  <span className="ml-5 mr-5">Education</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center dark:hover:bg-sky-500 dark:hover:rounded-lg"
                  href="/experience"
                >
                  <span className="ml-5 mr-5">Experience</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center dark:hover:bg-sky-500 dark:hover:rounded-lg"
                  href="/projects"
                >
                  <span className="ml-5 mr-5">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center dark:hover:bg-sky-500 dark:hover:rounded-lg"
                  href="/contact"
                >
                  <span className="ml-5 mr-5">Contact</span>
                </a>
              </li>
              <li className="nav-item ml-5">
                  <button type="button" onClick={() => setTheme(!Theme)} 
                    className="text-md dark:bg-gray-50 dark:text-gray-900
                    bg-gray-400 text-gray-100 border rounded-full px-2 py-1 hover:shadow-lg">
                      {Theme ? '💡' : '🌙'}
                  </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}



