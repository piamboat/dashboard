import React from 'react';
import { GiCard2Clubs, GiCard3Clubs, GiCard4Clubs, GiCard5Clubs, GiCard6Clubs, GiCard7Clubs } from "react-icons/gi";

const CardGame = ({ index, flipped, cardIcon, handleFlip }) => {
    return (
        <div
            className="flex flex-row justify-center"
            onClick={() => handleFlip(index)}
        >
            <div className="w-20 h-20 m-1 rounded-md bg-gray-100 flex items-center justify-center text-4xl cursor-pointer hover:bg-blue-100">
                <div className={`${flipped ? "" : "hidden"}`}>
                    {
                        cardIcon === 'GiCard2Clubs' ? <GiCard2Clubs /> : null
                    }
                    {
                        cardIcon === 'GiCard3Clubs' ? <GiCard3Clubs /> : null
                    }
                    {
                        cardIcon === 'GiCard4Clubs' ? <GiCard4Clubs /> : null
                    }
                    {
                        cardIcon === 'GiCard5Clubs' ? <GiCard5Clubs /> : null
                    }
                    {
                        cardIcon === 'GiCard6Clubs' ? <GiCard6Clubs /> : null
                    }
                    {
                        cardIcon === 'GiCard7Clubs' ? <GiCard7Clubs /> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default CardGame;