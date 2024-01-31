import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className='max-w-3xl mx-auto p-4'>
        <Link href="/">{"<Back"}</Link>
        <div className='relative w-full h-96 overflow-hidden rounded-lg mt-5'>
            <Image layout="fill" objectFit="cover" src={""} alt={""}/>
        </div>
        <div className='mt-4'>
            <h1 className='text-3xl font-semibold'>
                {"This is the title of blog"}
            </h1>
            <p className='text-gray-600 mt-2'>{"This is the description"}</p>
            <div className='mt-4 flex items-center text-grey-400'>
              <span className='text-sm'>Published on {"23-24-2323"}</span>
            </div>
        </div>


    </div>
  ); 
};

export default page;