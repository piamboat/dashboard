import React from 'react'
import Nav from './Nav'

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="w-100 max-w-4xl mx-auto p-5">
                <h1 className="text-4xl font-bold undefined">Daytech Dashboard</h1>
                <Nav />
                {children}
            </div>
        </div>
    );
}

export default Layout;