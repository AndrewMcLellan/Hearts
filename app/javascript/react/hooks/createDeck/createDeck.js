const createDeck = (payload) => {
    console.log(payload)
    fetch('/api/v1/decks', { 
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response)
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })
}

export default createDeck