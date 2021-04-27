import React from 'react';

const CardGame = ({ index, flipped, cardIcon, handleFlip }) => {
    return (
        <div
            key={index}
            className="flex flex-row justify-center"
            onClick={() => handleFlip(index)}
        >
            <div className="w-20 h-20 m-1 rounded-md bg-gray-100 flex items-center justify-center text-4xl cursor-pointer hover:bg-blue-100">
                <div className={`${flipped ? "" : "hidden"}`}>{cardIcon}</div>
            </div>
        </div>
    );
}

export default CardGame;