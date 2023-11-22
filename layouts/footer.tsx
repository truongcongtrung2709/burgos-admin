import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function Footer ()  {
  return (
    

<footer className="bg-white shadow  dark:bg-gray-800 z-10">
    <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">TCT</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/https://burgos-nextjs.vercel.app/" className="hover:underline me-4 md:me-6">Home</Link>
        </li>
        <li>
            <Link href="/https://burgos-nextjs.vercel.app/about" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link href="https://burgos-nextjs.vercel.app/products" className="hover:underline me-4 md:me-6">Products</Link>
        </li>
        <li>
            <Link href="https://burgos-nextjs.vercel.app/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}
