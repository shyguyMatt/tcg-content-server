const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('<h1>You have reached the user route!</h1>') 
})

module.exports = router;