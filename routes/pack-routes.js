const router = require('express').Router();

const fs = require('fs')

router.get('', (req, res) => {
  let filenames = fs.readdirSync('./packs')
  let result = []
  filenames.forEach(file => {
    let content = JSON.parse(fs.readFileSync('./packs/' + file, 'utf-8'))
    result.push({
      name: content.name,
      set:  content.set,
      game: content.game,
      filename: file
    })
  });
  res.send(result)
})

router.post('/open_pack', async (req, res) => {
  let cards = []
  let pack = JSON.parse(fs.readFileSync(`./packs/${req.body.filename}`))

  try {
    pack.cards.forEach(card => {
      let num = Math.random() * (100 - 0) + 0
      num = Math.round((num + Number.EPSILON) * 100) / 100
      let value = 0
      for (let [key, cardvalue] of Object.entries(card)) {
        if (num <= cardvalue + value && num > value) {
          cards.push({
            game: pack.game,
            set: pack.set,
            card: pack.cardIDs[key-1][Math.floor(Math.random() * pack.cardIDs[key-1].length)]
          })
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