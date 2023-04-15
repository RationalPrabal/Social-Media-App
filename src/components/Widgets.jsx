import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Widgets() {
  return (
    <div className='xl:w-1/3 hidden lg:inline ml-8 space-y-5 border-2'>
        <div className='w-[90%] xl:w-[90%] sticky top-0 bg-white py-1.5 z-50'>
            <div className='flex items-center p-3 rounded-full bg-red-300 relative '>
                <SearchIcon className='h-5 z-50 text-gray-500'/>
                <input type='text' className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white focus:ring-0 bg-gray-100' placeholder="Search twitter" />
            </div>
        </div>
    </div>
  )
}
