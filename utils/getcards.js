const fs = require('fs');

async function getCards() {
  const url = "https://api.lorcast.com/v0/sets/1/cards";
  let cardIDs = {
    common: [],
    uncommon: [],
    rare: [],
    superRare: [],
    legendary: [],
    enchanted: []
  }

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    response = await response.json();
    
    response.forEach(card => {
      switch (card.rarity) {
        case "Common":
          cardIDs.common.push(card.collector_number)
          break;

        case "Uncommon":
          cardIDs.uncommon.push(card.collector_number)
          break;
          
        case "Rare":
          cardIDs.rare.push(card.collector_number)
          break;

        case "Super_rare":
          cardIDs.superRare.push(card.collector_number)
          break;

        case "Legendary":
          cardIDs.legendary.push(card.collector_number)
          break;

        case "Enchanted":
          cardIDs.enchanted.push(card.collector_number)
          break;        
      
        default:
          break;
      }
    });
    
    fs.writeFile('./cards.json', JSON.stringify(cardIDs), function() {
      console.log('Saved!')
    })
  } catch (error) {
    console.error(error.message);
  }
}

getCards()
