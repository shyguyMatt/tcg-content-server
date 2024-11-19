const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('<h1>You have reached the packs route!</h1>') 
})

router.get('/open_pack', async (req, res) => {
  let cards = []

  try {
    pack.cards.forEach(card => {
      let num = Math.random() * (100 - 0) + 0
      num = Math.round((num + Number.EPSILON) * 100) / 100
      let value = 0
      for (let [key, cardvalue] of Object.entries(card)) {
        if (num <= cardvalue + value && num > value) {
          cards.push(pack.cardIDs[key-1][Math.floor(Math.random() * pack.cardIDs[key-1].length)])
        }
        value = value + cardvalue
      }
    }); 
    
    res.send(cards)    

  } catch (err) {
    console.log(err)
  }
})

module.exports = router;