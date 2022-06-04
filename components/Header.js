/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
            <Image
                src="/img/instagram_logo.svg"
                layout='fill'
                className='object-contain'
            />
        </div>
        <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
            <Image
                src="/img/instagram_logo_2.svg"
                layout='fill'
                className='object-contain'
            />
        </div>

        <div className='relative mt-1'>
            <div className='absolute top-2 left-2'>
                <SearchIcon className='h-5 text-gray-500'/>
            </div>
            <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>
        </div>

        <div className='flex space-x-4 items-center'>
            <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
            <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
            <img src='/img/avatar-man.png' alt="user-image" className='h-10 rounded-full'/>
        </div>
    </div>

  )
}
