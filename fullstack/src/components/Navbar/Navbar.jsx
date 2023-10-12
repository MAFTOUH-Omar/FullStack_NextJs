"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className='bg-white md:py-3 flex items-center '>
        <Link href="/" className='text-black md:ml-3 text-lg'>Blog <span className='font-semibold text-white bg-orange-400 rounded-md py-1 px-2'>Omar</span></Link>
        <div className='flex mx-auto font-somibold text-center '>
            <Link className='text-black md:mr-5 hover:scale-105 transition-all duration-200' href="/">Home</Link>
            <Link className='text-black md:mr-5 hover:scale-105 transition-all duration-200' href="/about">About</Link>
            <Link className='text-black md:mr-5 hover:scale-105 transition-all duration-200' href="/blog">Blogs</Link>
            <Link className='text-black md:mr-5 hover:scale-105 transition-all duration-200' href="/portfolio">Portfolio</Link>
            <Link className='text-black md:mr-5 hover:scale-105 transition-all duration-200' href="/contact">Contact</Link>
        </div>
        <div className='flex justify-end md:mr-3'>
            <Link className='bg-orange-400 py-2 px-5 font-semibold hover:bg-orange-300 transition-all duration-500 rounded-xl text-white' href="/dashboard/login" >
                SignIn
            </Link>
        </div>
    </nav>
  )
}

export default Navbar