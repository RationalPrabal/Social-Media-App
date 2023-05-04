import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import Moment from 'react-moment'
import { db, storage } from '../../firebase'
import { deleteObject, ref } from 'firebase/storage'
import { useRecoilState } from 'recoil'
import { modalState } from '../../atom/ModalAtom'

export default function Post({post}) {
    const [likes,setLikes]= React.useState([])
    const [hasLiked,setHasLiked]= React.useState(false)
    const [open,setOpen]= useRecoilState(modalState)
const {data:session}= useSession()

//! like post function
    const likePost=async()=>{

    if(session){
        if(hasLiked){
       
            await deleteDoc(doc(db,"posts",post.id,"likes",session?.user.uid))
                    }
               else await setDoc(doc(db,"posts",post.id,"likes",session?.user.uid),{
                username:session.user.username
            })
    }
    else{
        signIn()
    }
    }
//! delete post function

const deletePost =async()=>{
    if(window.confirm("Are you sure you want to delete?")){
deleteDoc(doc(db,"posts",post.id))
if(post.data().image){
deleteObject(ref(storage,`posts/${post.id}/image`))
}
    }
}
//! setting the likes count
    React.useEffect(()=>{
onSnapshot(collection(db,"posts",post.id,"likes"),(snapshot)=>setLikes(snapshot.docs))
    },[db])

    //! setting the like for the particular user

    React.useEffect(()=>{
setHasLiked(likes.findIndex(like=>like.id===session.user.uid)!==-1) //! if uid is there in the like array then it is gonna give us its index which can never be -1, so its gonna be true. if uid is not there in the like array then it is gonna give -1 and return false. So this is how we are setting the like as true or false.
    },[likes])

  return (
    <div className='flex p-3  cursor-pointer border-b border-gray-200'>
        <img className=  'w-11 h-11 border-6 cursor-pointer hover:brightness-95 rounded-full mr-4' src={post.data().userImage} alt="user Image" />
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex space-x-1 whitespace-nowrap items-center'>
                    <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.data().name}</h4>
                    <span className='text-sm sm:text-[15px]'>@{post.data().username};</span>
                    <span className='text-sm sm:text-[15px] hover:underline'>{
                        <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
                    }</span>
                </div>
                <div>
                    <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2'/>
                </div>
                </div>
                <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2'>{post.data().text}</p>
                <img className='rounded-2xl mr-2' src={post.data().image}/>
                <div className='flex justify-between text-gray-500 p-2'>
                    <ChatIcon onClick={()=>setOpen(!open)} className='h-9 hoverEffect w-9 p-2 hover:text-sky-500 hover:bg-sky-100'/>
                   {
                    session?.user.uid===post?.data().id &&  <TrashIcon onClick={deletePost} className='h-9 hoverEffect w-9 p-2 hover:text-red-600 hover:bg-red-100'/>
                   }
               <div className='flex items-center'>
               {
                        hasLiked ? <HeartIconFilled onClick={likePost} className='h-9 hoverEffect w-9 p-2 text-red-600 hover:bg-red-100'/> :     <HeartIcon onClick={likePost} className='h-9 hoverEffect w-9 p-2 hover:text-red-600 hover:bg-red-100'/>
                    }
                    {
                        likes.length>0&&(
                            <span className={`${hasLiked && "text-red-600"} text-sm` }>{likes.length}</span>
                        )
                    }
               </div>
                
                    <ShareIcon className='h-9 hoverEffect w-9 p-2 hover:text-sky-500 hover:bg-sky-100'/>
                    <ChartBarIcon className='h-9 hoverEffect w-9 p-2 hover:text-sky-500 hover:bg-sky-100'/>

                </div>
         
        </div>
    </div>
  )
}
