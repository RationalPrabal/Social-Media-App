import React from 'react'
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import {HomeIcon} from "@heroicons/react/solid"
import {HashtagIcon,BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon,InboxIcon, UserIcon } from "@heroicons/react/outline"
import { useSession,signIn } from 'next-auth/react'
export default function Sidebar() {
  const {data:session}= useSession()
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>
        <div className='hoverEffect p-0 hover:bg-blue-100 xl-px-1'>
        <Image src="https://img.freepik.com/free-icon/twitter_318-674515.jpg" width="40" height="40" alt="twitter"/>
        </div>
        <div className='mt-4 mb-2.5 xl:items-start'>
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            {
              session && (
                <>
            
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
            </>
              )
}
        </div>

        {
          session ?
        
        <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-sm hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>
        : <button onClick={signIn} className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-sm hover:brightness-95 text-lg hidden xl:inline'>Sign In</button>
}
    </div>
  )
}
