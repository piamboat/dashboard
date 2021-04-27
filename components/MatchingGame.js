import React from 'react'
import { GiCard2Clubs, GiCard3Clubs, GiCard4Clubs, GiCard5Clubs, GiCard6Clubs, GiCard7Clubs } from "react-icons/gi";

const MatchingGame = () => {
    const cards = [
        { id: 1, icon: <GiCard2Clubs /> },
        { id: 2, icon: <GiCard3Clubs /> },
        { id: 3, icon: <GiCard4Clubs /> },
        { id: 4, icon: <GiCard5Clubs /> },
        { id: 5, icon: <GiCard6Clubs /> },
        { id: 6, icon: <GiCard7Clubs /> }
    ];

    return (
        <div>
            <h2 className="text-xl mb-2">Matching Game</h2>
                <div className="grid grid-cols-4 gap-3">
                    {
                        cards.map(card => {
                            return (
                                <div className="flex flex-row justify-center">
                                    <div className="w-20 h-20 m-1 rounded-md bg-gray-100 flex items-center justify-center text-4xl cursor-pointer hover:bg-blue-100">
                                        {card.icon}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
        </div>
    );
}

export default MatchingGame;