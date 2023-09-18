import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";
import Image from 'next/image';
import Logo from "../../../public/assets/logo.png"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" bg-white text-gray-600 body-font">
    <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
      <div className="flex font-medium items-center md:justify-start justify-center text-gray-900">
      <Image
       src={Logo}
       width={200}
       height={200}
       alt='logo'
       />
        
      </div>
      <p className="text-sm text-blue-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 Portfolio
        
      </p>
      <span className="inline-flex text-lg sm:ml-auto sm:mt-0 mt-4 justify-center 
      sm:justify-start">
        <a className="text-gray-500">
            <Link href={'https://www.facebook.com/profile.php?id=100008884448285'}>
          <AiFillFacebook className="text-2xl hover:text-blue-600"/>
          </Link>
        </a>
        <div className="ml-3 text-gray-500">
            <Link href={"https://www.instagram.com/aamir_azhar_/"}>
        <AiFillInstagram className="text-2xl  hover:text-purple-500"/>  
        </Link>
        </div>
        <div className="ml-3 text-gray-500 cursor-pointer">
            
          <AiFillTwitterSquare className="text-2xl hover:text-blue-500"/>
        </div>
              </span>
    </div>
  </footer>
  
  )
}

export default Footer;