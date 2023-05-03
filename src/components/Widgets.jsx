import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import News from './News'
import { AnimatePresence,motion } from 'framer-motion'

export default function Widgets({result}) {
  const [articleNum,setarticleNum]= React.useState(3)
  return (
    <div className='xl:w-1/3 hidden lg:inline ml-8 space-y-5 border-2'>
        <div className='w-[90%] xl:w-[90%] sticky top-0 bg-white py-1.5 z-50'>
            <div className='flex items-center p-3 rounded-full bg-red-300 relative '>
                <SearchIcon className='h-5 z-50 text-gray-500'/>
                <input type='text' className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white focus:ring-0 bg-gray-100' placeholder="Search twitter" />
            </div>
        </div>
<div className='text-gray-700 spacey-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]'>
<h4 className='font-bold text-xl px-4'>What`s happening</h4>
     <AnimatePresence>   {
          result?.slice(0,articleNum).map(el=>
            <motion.div key={el.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
           transition={{duration:1}}>
          <News key={el.id} el={el} />
          </motion.div>)
        }
        </AnimatePresence>
        <button onClick={()=>{
          setarticleNum(articleNum+3)
        }} className='text-blue-300 pl-4 pb-3 hover:text-blue-400 outline-0'>Show More</button>
</div>
    </div>
  )
}
