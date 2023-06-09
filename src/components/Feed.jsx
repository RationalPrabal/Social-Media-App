import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'
import Input from './Input'
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { AnimatePresence,motion } from 'framer-motion'

export default function Feed() {
 const [posts,setPosts] =React.useState([])

 React.useEffect(()=>
onSnapshot(query(collection(db,"posts"),orderBy("timestamp","desc")),(snapshot)=>{
  setPosts(snapshot.docs)
})

 ,[])

  return (
    <div className='xl:ml-[370px] sm:ml-[70px] w-full  sm:w-1/2 border-2'>
        <div className='flex py-2 px-3 sticky justify-between top-0 bg-white z-50 items-center'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex justify-center items-center'>
                <SparklesIcon className='h-7'/>
            </div>
        </div>
<Input/>
<AnimatePresence>
{
  posts.map(post=>
    <motion.div key={post.id} 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
   transition={{duration:1}}
    >
  <Post key={post.id} post={post}/>
  </motion.div>
  )
}
  </AnimatePresence>
    </div>
  )
}
