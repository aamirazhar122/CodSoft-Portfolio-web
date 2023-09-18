import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from "../../../public/assets/logo.png";
import { BiCloudDownload } from "react-icons/bi";

const Navbar = () => {
  return (
    <section className=' bg-white shadow-md sticky top-0 z-10'>
    <header className="text-gray-600  body-font">
    <div className="container mx-auto flex flex-wrap px-5 flex-col 
    md:flex-row items-center">
       <Image
       src={Logo}
       width={200}
       height={200}
       alt='logo'
       />

      <nav className='md:ml-auto md:mr-auto flex justify-center items-center flex-wrap'>

      <Link href={"/"} className='mr-5 hover:text-blue-400' >
        Home
        </Link>
      <Link href={"#About"} className='mr-5 hover:text-blue-400'>
        About
        </Link>
      <Link href={"#Skills"} className='mr-5 hover:text-blue-400'>
        Skills
        </Link>
      <Link href={"#Projects"} className='mr-5 hover:text-blue-400'>
        Projects
        </Link>
      <Link href={"#Contact"} className='mr-5 hover:text-blue-400'>
        Contact
        </Link>    
        </nav>
        <a href='/assets/cv/CV.pdf'>
  <button className="inline-flex items-center bg-gray-100 
  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 
  rounded text-base mt-4 md:mt-0">Download CV
     <BiCloudDownload className=" text-xl ml-1.5"/>
    </button>
    </a>
    </div>
  </header>
  </section>
  )
}

export default Navbar;    
        
        
        
        
        
        
        
        
        
        
        
        
            
        
        
        
        
        
        
        
        
        
        
        
        
        

    