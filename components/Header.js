/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl'>
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

        <h1>Right Side</h1>
    </div>

  )
}
