import React from 'react'

const Card = ({ children }) => {
    return (
        <div className='p-5 border-1 bg-white rounded-2xl'>
            {children}
        </div>
    );
}

export default Card;