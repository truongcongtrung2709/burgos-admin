import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function Header ()  {
  return (
   <nav className="bg-white">
        <div className="max-w-screen-xl container flex  flex-wrap items-center justify-between mx-auto py-4">
          <div className="left-nav flex flex-wrap items-center justify-end">
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image width={150} height={50} src="/assets/logos/logo.svg" alt="" />
          </Link>
          </div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <span className='pr-3 hidden md:block'>Welcome Admin</span>
              <Image width={50} height={50}  className=" rounded-full" src="/assets/avatar/avatar.svg" alt="user photo" />
            
            
          </div>
        </div>
      </nav>
  )
}
