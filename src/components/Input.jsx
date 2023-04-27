import React, { useRef } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
export default function Input() {
    const {data:session} = useSession()
const [input,setInput]= React.useState("")
const [fileURL,setFileURL] = React.useState(null)
const filePicker=useRef(null)
const [loader,setLoader]= React.useState(false)
async function sendPost(){
    if(loader){
        return 
    }
    if(!loader){
        setLoader(true)
    }
const docRef= await addDoc(collection(db,"posts"),{
    id:session.user.uid,
    text:input,
    userImage:session.user.image,
    timestamp:serverTimestamp(),
    name:session.user.name,
    username:session.user.username,

});
const imageRef=ref(storage,`posts/${docRef.id}/image`);

if(fileURL){
    await uploadString(imageRef,fileURL,"data_url").then(
        async()=>{
            const downloadURL=await getDownloadURL(imageRef)
            await updateDoc(doc(db,"posts",docRef.id),{
            image:downloadURL
        })
        }
    )
}
setLoader(false)
setInput("")
setFileURL(null)
}

const addImageToPost=(e)=>{
    const Reader= new FileReader();
    if(e.target.files[0]){
        Reader.readAsDataURL(e.target.files[0]);
    }
    Reader.onload=(readerEvent)=>{
       setFileURL(readerEvent.target.result)
    }
}
  return (
    <>
    {
   session &&  <div className='flex border-b border-gray-200 p-3 space-x-3'>
        <img className=  'w-11 h-11 border-6 cursor-pointer hover:brightness-95 rounded-full' src={session?.user?.image} alt="user-image"/>
<div className='w-full divide-y divide-gray-200'>
    <div className=''>
        <textarea className='w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px]' name="" id="" rows="2" placeholder="What's happening..." value={input} onChange={(e)=>setInput(e.target.value)}></textarea>
    </div>
    {
        fileURL && (
            <div className="relative">
                <XIcon className='w-5 absolute cursor-pointer shadow-md' onClick={()=>setFileURL(null)} />
                <img src={fileURL} className={`${loader && "animate-pulse"}`} />
                </div>
        )
    }
{!loader&&  <div className='flex items-center justify-between pt-2.5'>
        <div className='flex'>
            <div className='' onClick={()=>filePicker.current.click()}>
            <PhotographIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100'/>
            <input type='file' hidden ref={filePicker} onChange={(e)=>addImageToPost(e)}/>
            </div>
            <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100'/>
        </div>
        <button onClick={sendPost} disabled={!input.trim()} className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>Tweet</button>
    </div>
}
</div>
    </div> 
}
    </>
    
  )
}
