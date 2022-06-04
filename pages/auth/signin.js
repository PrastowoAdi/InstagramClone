/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';
export default function signin({providers}) {
  return (
    <>
        <Header/>
        <div className="flex justify-center space-x-7 mt-20">
            <img className='hidden object-cover rotate-6 md:inline-flex md:w-48' src='/img/sign-img.png' alt='img-signin'/>
            <div className=''>
                {Object.values(providers).map(provider =>(
                    <div key={provider.name} className='flex flex-col items-center'>
                        <img className='w-32 object-cover' src='/img/sign2_img.png' alt='img-sign'/>
                        <p className="text-sm italic my-10 text-center">This app is created for more reason</p>
                        <button onClick={() => signIn(provider.id, {callbackUrl:"/"})} className='bg-rose-500 rounded-lg p-3 text-white hover:bg-rose-600'>Sign in with {provider.name}</button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export async function getServerSideProps(context){
    const providers = await getProviders();
    return {
        props: {providers}
    }
}
