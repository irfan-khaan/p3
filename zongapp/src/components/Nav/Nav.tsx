import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className="flex gap-5 py-5 px-5 text-blue-600 text-2xl bg-green-950">

    
        <header>
            <Link href="/">HOME</Link>
            <Link href="/information"> INFORMATION</Link>
            <Link href="/information/project"> PROJECT</Link>
            <Link href="/information/contact-us"> CONTACT US</Link>
            
        </header> 
    </div>
  )
}

export default Nav