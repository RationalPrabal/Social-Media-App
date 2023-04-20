import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Widgets from '@/components/Widgets'

const inter = Inter({ subsets: ['latin'] })

export default function Home({result}) {
  return (
   <main className='flex min-h-screen w-[90%] m-auto border-2'>
    <Sidebar />
    <Feed />
    <Widgets result={result.articles}/>
   </main>
  )
}
export async function getServerSideProps() {
  const result= await fetch(`https://newsapi.org/v2/top-headlines?q=india&apiKey=${process.env.API_KEY}`).then((res)=>res.json())
  return {
    props:{
      result
    }
  }
}