import React, { useState } from 'react';

import CardGame from './CardGame';

const MatchingGame = ({ cards }) => {
    const [openCard, setOpenCard] = useState([]);

    // make a pair of cards
    const pairOfCards = [...cards, ...cards];

    const handleFlip = index => {
        setOpenCard(opened => [...opened, index]);
    }

    return (
        <div>
            <h2 className="text-xl mb-2">Matching Game</h2>
                <div className="grid grid-cols-4 gap-3">
                    {
                        pairOfCards.map((card, index) => {
                            let flipped = false;
                            if( openCard.includes(index) ) flipped = true;

                            return <CardGame index={index} flipped={flipped} cardIcon={card.icon} handleFlip={handleFlip} />
                        })
                    }
                </div>
        </div>
    );
}

export default MatchingGame;