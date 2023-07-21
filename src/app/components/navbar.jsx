import Link from 'next/link'

export default function Navbar(){
    return(
        <div className='flex space-x-4'>
            <Link className='' href="/">Home</Link>
            <Link className='' href="/about">About</Link>
            <Link className='' href="/about/vision">Vision</Link>
            <Link className='' href="/about/mission">Mission</Link>
            <Link className='' href="/listofposts">Posts</Link>
        </div>
    )
}