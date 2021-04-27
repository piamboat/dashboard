import React, { useState, useEffect } from 'react';
import CardGame from './CardGame';

const MatchingGame = ({ cards }) => {
    const [openCard, setOpenCard] = useState([]);
    const [matched, setMatched] = useState([]);

    // make a pair of cards
    const pairOfCards = [...cards, ...cards];

    useEffect(() => {
        const firstSelected = pairOfCards[openCard[0]];
        const secondSelected = pairOfCards[openCard[1]];

        if(secondSelected && firstSelected.id === secondSelected.id) {
            setMatched([...matched, firstSelected.id]);
        }

        if(openCard.length === 2) {
            setTimeout(() => {
                setOpenCard([]);
            }, 1000);
        }
    }, [openCard])

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
                            if( matched.includes(card.id) ) flipped = true;

                            return <CardGame index={index} flipped={flipped} cardIcon={card.icon} handleFlip={handleFlip} />
                        })
                    }
                </div>
        </div>
    );
}

export default MatchingGame;