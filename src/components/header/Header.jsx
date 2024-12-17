import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '@/assets/images/Logo.svg'
import { IoMenu } from 'react-icons/io5'
const Header = () => {
  return (
    <header className='w-full h-auto bg-[#1c1d2b] p-5'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <Link href={'/'}>
          <Image className='w-32' src={logo} alt='image' />
        </Link>
        <nav className='flex gap-10 max-md:hidden'>
          <Link
            className='text-gray-500 duration-300 text-xl hover:text-white'
            href={'/'}
          >
            Home
          </Link>
          <Link
            className='text-gray-500 duration-300 text-xl hover:text-white'
            href={'/service'}
          >
            Service
          </Link>
          <Link
            className='text-gray-500 duration-300 text-xl hover:text-white'
            href={'/compane'}
          >
            Company
          </Link>
          <Link
            className='text-gray-500 duration-300 text-xl hover:text-white'
            href={'/career'}
          >
            Career
          </Link>
          <Link
            className='text-gray-500 duration-300 text-xl hover:text-white'
            href={'/careerInner'}
          >
            Career2
          </Link>
        </nav>
        <IoMenu className='text-5xl text-white hidden max-md:block'/>
      </div>
    </header>
  )
}

export default Header
