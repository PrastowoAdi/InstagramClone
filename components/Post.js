/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { DotsHorizontalIcon } from '@heroicons/react/solid'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
        <div className='flex items-center p-5'>
            <img className='h-12 rounded-full object-cover border p-1 mr-3' src="/img/avatar-man.png" alt={username}/>
            <p className='font-bold flex-1'>{username}</p>
            <DotsHorizontalIcon className='h-5'/>
        </div>
        <img className='object-cover w-full-height' src='/img/bg1.jpg' />
    </div>
  )
}
