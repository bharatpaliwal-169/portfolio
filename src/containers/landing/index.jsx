import React from 'react';
import Greeting from '../../components/Greetings'
import Media from '../../components/social media';
export default function Home() {
  return (
    <>
      <div className="container flex  items-center justify-center dark:text-blue-100 text-gray-800">
        <div className=" md:w-1/2 w-full ml-48 ">
          <h2 className="text-4xl">
          Hello 👋,  
          </h2>
          <p className="text-3xl whitespace-normal py-4">
            I'm <span className='dark:text-white text-red-500 text-5xl py-2 '>Bharat Paliwal </span>
            Front-end Developer, <br/>
            Active Learner🔥
          </p>
          <Media className = 'py-4'/>
        </div>
        <div className="md:w-1/2 w-full">
          <Greeting></Greeting>
        </div>
      </div>
    </>
  )
}
