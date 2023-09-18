import React from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";
const Skills = () => {
  return (
    <div id="Skills">
      <section className="text-gray-600 bg-gray-100 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
      
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          My Skills</h1>
      </div>
      <div className="flex flex-wrap -m-4 -mt-[5rem]">
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                <AiOutlineCheckCircle className="text-2xl font-medium"/>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                HTML
              </h2>
              
            </div>
            
          </div>
          
          <div className='flex-grow'>
          <div className=' relative w-full h-1 rounded-xl bg-gray-300 -mt-4'>
            <div className='absolute w-[100%] h-1 bg-blue-500 rounded-xl'></div>
            </div>
            <p className='text-blue-500 font-bold text-right'>100%</p>
                </div>
          
        </div>
        
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <AiOutlineCheckCircle className="text-2xl font-medium"/>
                </div>
               <h2 className="text-gray-900 text-lg title-font font-medium">
                Tailwind CSS
              </h2>
            </div>
            
          </div>
          <div className='flex-grow'>
          <div className=' relative w-full h-1 rounded-xl bg-gray-300 -mt-4'>
            <div className='absolute w-[90%] h-1 bg-blue-500 rounded-xl'></div>
            </div>
            <p className='text-blue-500 font-bold text-right'>90%</p>
            </div>
            </div>
          <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <AiOutlineCheckCircle className="text-2xl font-medium"/>
                </div>
               <h2 className="text-gray-900 text-lg title-font font-medium">
                React JS
              </h2>
            </div>
            
          </div>
          <div className='flex-grow'>
          <div className=' relative w-full h-1 rounded-xl bg-gray-300 -mt-4'>
            <div className='absolute w-[80%] h-1 bg-blue-500 rounded-xl'></div>
            </div>
            <p className='text-blue-500 font-bold text-right'>80%</p>
               </div>
               </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <AiOutlineCheckCircle className="text-2xl font-medium"/>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                JavaScript/TypeScript
              </h2>
            </div>
            
          </div>
          <div className='flex-grow'>
          <div className=' relative w-full h-1 rounded-xl bg-gray-300 -mt-4'>
            <div className='absolute w-[70%] h-1 bg-blue-500 rounded-xl'></div>
            </div>
            <p className='text-blue-500 font-bold text-right'>70%</p>
    </div>
      </div>
      <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <AiOutlineCheckCircle className="text-2xl font-medium"/>
                </div>
               <h2 className="text-gray-900 text-lg title-font font-medium">
                NEXT JS
              </h2>
            </div>
            
          </div>
          <div className='flex-grow'>
          <div className=' relative w-full h-1 rounded-xl bg-gray-300 -mt-4'>
            <div className='absolute w-[75%] h-1 bg-blue-500 rounded-xl'></div>
            </div>
            <p className='text-blue-500 font-bold text-right'>75%</p>
               </div>
               </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Skills;