import { notFound } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

const getPostById = async (id) =>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache: "no-store",
  })

  if (!response.ok){
    return notFound()
  }

  return response.json();
  console.log(data)
}

export async function generateMetadata({ params }) {

  const post = await getPostById(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}



const BlogPost = async ({params }) => {
  const data = await getPostById(params.id)
  return (
    <div className='flex justify-center mx-auto flex-col w-[900px] mt-5'>
      <div className='flex mx-auto'>
        <Image src="/Images/testBlog.jpg" alt="test blog" width={500} height={500} className='border-4 border-orange-500 w-[700px] h-[400px] rounded-lg' />
      </div>
      <div className='flex justify-center mx-auto mt-5'>
        <span className='bg-orange-600 py-2 px-5 text-white rounded-md cursor-pointer mr-1'>#Technology</span>
        <span className='bg-orange-600 py-2 px-5 text-white mr-1 rounded-md cursor-pointer'>#DataBase</span>
        <span className='bg-orange-600 mr-1 py-2 px-5 text-white rounded-md cursor-pointer'>#Promise</span>
        <span className='bg-orange-600 mr-1 py-2 px-5 text-white rounded-md cursor-pointer'>#Engine</span>
      </div>
      <div className='flex mx-auto mt-2 items-center'>
          <Image src="/Images/Avatar.png" alt='Avatar' width={40} height={40}/>&nbsp;
          <p className='font-semibold'>Tracey Wilson August 20,2023</p>
      </div>
      <div className='flex justify-center mx-auto mt-5'>
        <h1 className='text-2xl font-bold capitalize text-orange-600 '>{data.title}</h1>
      </div>
      <div className='flex justify-center mt-5 mx-28 text-center'>
          <h1 className='text-lg font-mono text-slate-800'>{data.body}</h1>
      </div>
    </div>
  )
}

export default BlogPost