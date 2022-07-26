import React from 'react'

export const useInitDeck = async () => {
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/')
    const json = await response.json();
    return json
}