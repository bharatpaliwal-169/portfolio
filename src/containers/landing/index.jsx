import React from 'react';
import Tester from '../../components/try'
export default function Home() {
  return (
    <>
      <div className="grid grid-flow-row auto-rows-max">
        <div className="row dark:text-blue-100 text-gray-800">
          <div className="columns-6">
            <div>
              Hello 👋  
            </div>
          </div>
        </div>

      </div>

      <>
        <Tester></Tester>
      </>


      
    </>
  )
}
