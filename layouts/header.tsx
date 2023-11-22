"use client"
import { nav } from '@/_mock/_nav'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
export default function Header ()  {
  const [isToggle, setIsToggle] = useState(false)
  function toggleMenu(){
    
    setIsToggle(!isToggle)
    
  }
  return (
   <nav className="bg-white shadow-lg">
        <div className="flex container max-w-screen-xl mx-auto py-4 items-center">
          <div className="left-nav flex flex-wrap items-center justify-end relative">
            <button onClick={() => toggleMenu()} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
            </button>
            <div className={`${isToggle ? "flex": "hidden" } md:hidden bg-gradient-radial flex-col absolute top-10 left-8 p-4 w-[200px] z-[1000]`}>
              <ul>
                {nav.map((item,index) => (
                  <li key={index} className='p-3 hover:bg-yellow text-white'>
                    <Link href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                ))}
                
              </ul>
            </div>
          </div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              
              <Image width={50} height={50}  className=" rounded-full mr-3 p-2" src="/assets/avatar/avatar.svg" alt="user photo" />
              <span className='hidden md:block'>Welcome Admin</span>
            
          </div>
        </div>
      </nav>
  )
}
