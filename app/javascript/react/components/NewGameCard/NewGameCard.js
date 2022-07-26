import React, { useEffect, useState } from 'react';
import { useInitDeck } from '../../hooks/useInitDeck/useInitDeck';
import { getDeckCards } from '../../hooks/getDeckCards/getDeckCards';

const NewGameCard = ({ setIsStarted, setDeckId }) => {
    const initGame = async () => {
        const data = await useInitDeck();
        return data;
    }

    return(
        <div>
            <div className='start-game-graphic'>
                <img src='https://farm3.static.flickr.com/2200/2120100600_1e54414845_o.gif'/>
            </div>
            <div className='button-wrapper'>
                <button 
                    className='button' 
                    onClick={ async () => {
                        const gameStartData = await initGame();
                        const deckId = gameStartData.deck_id

                        if (deckId) {
                            setDeckId(deckId)
                        }

                        setIsStarted(true);
                    }}
                >
                    STAAAAHT HEAHHHTS
                </button>
            </div>
        </div>
    )
}

export default NewGameCard