import React, { useState, useEffect } from 'react';

import NewGameCard from '../NewGameCard';

import getDeckCards  from '../../hooks/getDeckCards/getDeckCards';
import createDeck from '../../hooks/createDeck';

const Home = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [deckId, setDeckId] = useState('');
    const [deckCards, setDeckCards] = useState([]);

    const fetchAndSetDeckCards = async () => {
        const deckData = await getDeckCards(deckId);
        setDeckCards(deckData.cards)
        createDeck({cards: deckData.cards, deckId: deckId })
    }

    useEffect(() => {
        if (isStarted && deckId) {
            fetchAndSetDeckCards(deckId);
        }
    }, [isStarted, deckId])

    useEffect(() => {
        if (deckCards.length) {
            console.log(deckCards)
        }
    }, [deckCards])

    return(
        <div>
            {!isStarted && 
                <NewGameCard 
                    setIsStarted={setIsStarted} 
                    setDeckId={setDeckId}
                />
            }
        </div>
    )
}

export default Home