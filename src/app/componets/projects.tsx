import React from 'react'
import Image from 'next/image'
import p1 from '../../../public/assets/projct/p1.png'
import p2 from '../../../public/assets/projct/p2.png'
import p3 from '../../../public/assets/projct/p3.png'
import p4 from '../../../public/assets/projct/p4.png'
import Link from 'next/link'





const Projects = () => {
  return (
    <div id='Projects' >
        <section className="text-gray-600 bg-gray-100 body-font">
       <div className="container px-5 py-18 mx-auto">
         <div className="flex flex-col items-center text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
           My Projects
           </h1>
           
         </div>
         {/* p */}
         <div className="flex flex-wrap -m-8">
         <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
         <div className="flex relative my-4">
          <Image
            alt="projects"
           className="absolute inset-0 object-cover object-center"
            src={p2}
            width={300}
            height={300}
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
             
             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                 Hakathon Web App
             </h1>
             
             <p className="leading-relaxed">
             This is Hakathon Web App creating by using HTML, Tailwind CSS, React JS and Typescript.
             </p>
             
             <Link href={"https://vercel.com/aamirazhar122/hackathon-app"}>
             <p className="leading-relaxed text-blue-500">
             View Project
             </p>
             </Link>
           </div>
           </div>
           </div>
           <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
         <div className="flex relative">
          <Image
            alt="projects"
           className="absolute inset-0 object-cover object-center"
            src={p1}
            width={300}
            height={250}
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
             
             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Application Login Page
             </h1>
             <p className="leading-relaxed">
             This is Application Login Page creating by using HTML, Tailwind CSS, React JS and Typescript.
             </p>
             
             <Link href={"https://vercel.com/aamirazhar122/application-login-page"}>
             <p className="leading-relaxed text-blue-500">
             View Project
             </p>
             </Link>
           </div>
           </div>
           </div>
           <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
         <div className="flex relative">
          <Image
            alt="projects"
           className="absolute inset-0 object-cover object-center"
            src={p4}
            width={300}
            height={250}
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
             
             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Sidebar Menu app
             </h1>
             <p className="leading-relaxed">
              
             This is Sidebar Menu app creating by using HTML, Tailwind CSS, React JS and Typescript.
             </p>
             <Link href={"https://vercel.com/aamirazhar122/app-sidebar-design"}>
             <p className="leading-relaxed text-blue-500">
             View Project
             </p>
             </Link>
           </div>
           </div>
           </div>
           <div className="lg:w-1/2 sm:w-1/2 p-4 cursor-pointer">
         <div className="flex relative">
          <Image
            alt="projects"
           className="absolute inset-0 object-cover object-center"
            src={p3}
            width={300}
            height={300}
          />
           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
               Facebook Login Page
             </h1>
             <p className="leading-relaxed">
             This is Facebook Login Page creating by using HTML, Tailwind CSS, React JS and Typescript.
             </p>
             
              <Link href={"https://vercel.com/aamirazhar122/facebook-first-page"}>
              <p className="leading-relaxed text-blue-500">
              View Project              
              </p>
              </Link>
              
           </div>
           </div>
           </div>
           </div>  
              
            
         </div>
       
     </section>
   </div>
  )
}

export default Projects;