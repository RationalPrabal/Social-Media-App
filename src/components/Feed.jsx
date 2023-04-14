import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Feed() {
  return (
    <div className='xl:ml-[370px] sm:ml-[70px] w-full  sm:w-1/2 border-2'>
        <div className='flex py-2 px-3 sticky justify-between top-0 bg-white z-50 items-center'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex justify-center items-center'>
                <SparklesIcon className='h-7'/>
            </div>
        </div>

    </div>
  )
}
