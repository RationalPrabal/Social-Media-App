import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'
import Input from './Input'
import Post from './Post'

export default function Feed() {
  const posts=[
    {
      id:"1",
      name:"prabal",
      username:"rationalprabal",
       userImg:"https://avatars.githubusercontent.com/u/108731705?v=4",
       img:"https://images.unsplash.com/photo-1680875894705-1b23d0bfd064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
       text:"Nice one!",
       timestamp:'2 hours ago'

    },
    {
      id:"2",
      name:"prabal",
      username:"rationalprabal",
       userImg:"https://avatars.githubusercontent.com/u/108731705?v=4",
       img:"https://images.unsplash.com/photo-1681037690188-33ff11b9a05f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
       text:"3D Render!",
       timestamp:'1 hours ago'

    }
  ]
  return (
    <div className='xl:ml-[370px] sm:ml-[70px] w-full  sm:w-1/2 border-2'>
        <div className='flex py-2 px-3 sticky justify-between top-0 bg-white z-50 items-center'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex justify-center items-center'>
                <SparklesIcon className='h-7'/>
            </div>
        </div>
<Input/>
{
  posts.map(post=><Post key={post.id} post={post}/>)
}
    </div>
  )
}
