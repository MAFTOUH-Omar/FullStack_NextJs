"use client"
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const getData = async () =>{
 const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
  cache: "no-store",
 });

 if(!response.ok){
  throw new Error("Failed to fetch data");
 }

 return response.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className='flex flex-col justify-center items-center mx-20 mt-10'>
      {
        data.map((item)=>(
          <Link href={`blog/${item.id}`} className='my-2' key={item.id}>
            <div className='flex'>
              <div className='flex flex-1 mr-10'>
                <Image src="/Images/testBlog.jpg" alt="test blog" width={400} height={250} className='rounded-lg' />
              </div>
              <div className='w-1/2 flex items-center'>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <h1 className='font-bold text-xl capitalize '>{item.title}</h1>
                  </div>
                  <div className="flex items-center mt-2">
                    <h1 className='text-xl text-slate-800'>{item.body}</h1>
                  </div>
                  <div className="flex items-center mt-5">
                    <Link className='bg-orange-500 hover:bg-orange-400 rounded-lg px-4 py-2 text-white' href={`blog/${item.id}`}>Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Blog