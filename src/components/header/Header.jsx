import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <ul className='flex gap-5'>
        <Link href={"/"}>Home</Link>
        <Link href={"/service"}>Service</Link>
        <Link href={"/compane"}>Company</Link>
        <Link href={"/career"}>Career</Link>
        <Link href={"/careerInner"}>Career2</Link>
      </ul>
    </div>
  )
}

export default Header
