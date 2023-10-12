import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-white text-black p-4 flex items-center justify-between mt-3'>
        <Link href="/" className='text-lg'>
            Blog <span className='font-semibold text-white bg-orange-500 rounded-md py-1 px-2'>Omar</span>
        </Link>
        <div>
          <Image src="" alt=''  />
        </div>
        <p className='font-semibold'>
            &copy; {new Date().getFullYear()} MAFTOUH Omar. All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer