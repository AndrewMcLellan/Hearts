const getDeckCards = async (deckId) => {
    const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
    const cards = await response.json();
    return cards
}

export default getDeckCards; 