import {getProviders,signIn} from "next-auth/react"
export default function signin({providers}) {
  return (
    <div className="flex w-4/5 mx-auto mt-20 justify-around">
        <img className="hidden md:inline-flex rotate-6 w-60" src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/archive/introducing_conversationalads97.thumb.1280.1280.png" alt="twitter image"/>
        <div className="">
            {Object.values(providers).map(provider =><div className="flex flex-col items-center" key={provider.id}>
<img className="w-36 object-cover " src="https://img.freepik.com/free-icon/twitter_318-674515.jpg" alt="twitter logo" />
<p className="text-center text-sm">This app is created just for learning purpose</p>
<button onClick={()=>signIn(provider.id, {callbackURL:"/"})} className="bg-red-400 rounded-lg p-3 text-white mt-5 hover:bg-red-500">Sign in with {provider.name}</button>
               </div>)
                }

        </div>
    </div>
  )
}
export async function getServerSideProps(){
const providers= await getProviders()
return {
    props:{
        providers
    }
}
}