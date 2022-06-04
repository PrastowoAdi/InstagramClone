/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
        <div className='flex items-center p-5'>
            <img className='h-12 rounded-full object-cover border p-1 mr-3' src="/img/avatar-man.png" alt={username}/>
            <p className='font-bold flex-1'>{username}</p>
            <DotsHorizontalIcon className='h-5'/>
        </div>

        <img className='object-cover w-full-height' src='/img/bg1.jpg' />

        <div className='flex justify-between px-4 pt-4'>
            <div className=' flex space-x-4'>
                <HeartIcon className='btn'/>
                <ChatIcon className='btn'/>
            </div>
            <BookmarkIcon className='btn'/>
        </div>

        <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span>{caption}</p>

        <form className='flex items-center p-4'>
            <EmojiHappyIcon className='h-7'/>
            <input type='text' className='border-none flex-1 focus:ring-0' placeholder="Enter your component"/>
            <button className='text-blue-400 font-bold'>Post</button>
        </form>
    </div>
  )
}
