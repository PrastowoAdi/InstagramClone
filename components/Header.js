/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
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

            <h1>Right Side</h1>
        </div>

    </div>
  )
}
