import React from 'react'

export const VerticalCard = ({ children }) => {
    return (
        <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
            {children}
        </div>
    );
}

export const Card = ({ children }) => {
    return (
        <div className='p-5 border-1 bg-white rounded-2xl'>
            {children}
        </div>
    );
}