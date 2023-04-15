import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Widgets from '@/components/Widgets'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className='flex min-h-screen max-w-7xl m-auto border-2'>
    <Sidebar />
    <Feed />
    <Widgets/>
   </main>
  )
}
