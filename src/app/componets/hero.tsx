"use client"
import Image from 'next/image'
import React from 'react'
import Typewriter from "typewriter-effect"
import Pic from "../../../public/assets/picture/pic.png"
import Link from 'next/link'
const Hero = () => {
  return (
    <section className="text-gray-600 bg-gray-100">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am 
          <br className="hidden lg:inline-block" />
          
        <Typewriter
        options={{
            strings:[
                "Muhammad Aamir Azhar",
                "Web Developer",
            ],
            autoStart:true,
            loop:true,
        }}
        />
        <div className='w-[100px] h-[2px] bg-blue-500 '></div>
        </h1>
        <p className="mb-5 leading-relaxed max-w-screen-md">
        👋 Hi there! I am Muhammad Aamir Azhar, I am a Web Developer
         fully trained in modern designing tools and frameworks, with a
        strong background in React.js, TypeScript, HTML and Tailwind CSS.
        Front- end web development calls to my passions, It incorporates
        creativity and problem-solving and I am allowed to break it to improve the code. 
        </p>
        <div className='flex justify-center'>
<Link href={"#Contact"}>
<button className='bg-blue-500 px-4 py-3 rounded-lg text-lg text-white 
hover:bg-blue-600'>Contact me
</button>
</Link>        
      </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
      <Image  className='object-cover rounded-full border-4
       border-gray-500 mx-auto'
      src={Pic}
      width={300}
      height={300}
      alt='Hero'
      
      />
</div>
      </div>
          
  </section>
  
  )
}

export default Hero;