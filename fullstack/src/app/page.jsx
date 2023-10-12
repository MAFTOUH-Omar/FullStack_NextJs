import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center mt-5 '>
      <div className='flex'>
        <h1 className='text-2xl flex font-bold'>Page Title</h1>
      </div>
      {/* Patern */}
      <div id='patern-cover' className='rounded-xl border-2 border-orange-400 mt-10 container'>
        <div className=' ml-4 mt-[230px]'>
            <div className='flex'>
              <h1 className='bg-orange-600 py-2 px-5 text-white rounded-md cursor-pointer'>Technology</h1>
            </div>
          <div className='flex mt-2'>
            <h1 className='text-black font-bold text-2xl capitalize'>
              The Impact of Technology on the Workplace : How Technology is Changing
            </h1>
          </div>
          <div className='flex mt-1 items-center'>
            <Image src="/Images/Avatar.png" alt='Avatar' width={40} height={40}/>&nbsp;
            <p className='font-semibold'>Tracey Wilson August 20,2023</p>
          </div>
        </div>
      </div>
      {/* En Pattern */}
    </div>
  )
}
