import Image from 'next/image';
import React from 'react';
import PIC1 from '../../../public/assets/picture/pic1.jpg';

const About = () => {
  return (
    <div id="About">
        <section className="text-gray-600 bg-gray-100 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
        <Image
          className="object-cover object-center rounded-lg border-4
           border-gray-500 mx-auto"
          alt="hero"
          src={PIC1}
          width={240}
          height={250}

        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          About Me
        </h1>
        <div className="mb-5 flex-1 leading-relaxed">
            <p>
        I Love coding, </p>
<p>
👋 Hi there! I am Muhammad Aamir Azhar, I am a Web Developer fully
 trained in modern designing tools and frameworks, with a strong background
  in React.js, HTML, Tailwind CSS and TypeScript. Front- end web development
   calls to my passions, It incorporates creativity and problem-solving 
   and I am allowed to break it to improve the code.</p>
<p>
I love applying responsive design principles and watching my web pages 
shrink into mobile screens and still look amazing. Its oddly satisfying. 
I think in a way I am kind of like those web pages; I am moldable, but I 
still keep my creative flare intact. </p>

        </div>
        <div className="flex w-full md:justify-start justify-center items-end">
          <a href='/assets/cv/CV.pdf'>
          <button className="inline-flex text-white bg-blue-500 border-0 
          py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-lg text-lg">
            View CV
          </button>
          </a>
        </div>
        
      </div>
    </div>
  </section>
  </div>
  )
}

export default About;