const router = require('express').Router();

const packRoutes = require('./pack-routes');
const userRoutes = require('./user-routes')


router.use('/packs', packRoutes);
router.use('/users', userRoutes);

router.get('/test', async (req, res) => {
  try {
    res.send('<h1>this is a test</h1>')   
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.use((req, res) => {
  res.send("<h1>Nothing Here!</h1>")
})

module.exports = router;