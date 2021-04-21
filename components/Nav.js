import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
    const [page, setPage] = useState('widgets');

    return (
        <nav className="my-5">
            <ul>
                <li
                    onClick={() => setPage('widgets')}
                    className={`inline-block px-4 py-1 mr-1.5 rounded-lg ${page === 'widgets' ? 'text-white bg-blue-500' : 'text-blue-500 bg-gray-100'}`}
                >
                    <Link href='/'>Widgets</Link>
                </li>
                <li
                    onClick={() => setPage('about')} 
                    className={`inline-block px-4 py-1 mr-1.5 rounded-lg ${page === 'about' ? 'text-white bg-blue-500' : 'text-blue-500 bg-gray-100'}`}
                >
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;