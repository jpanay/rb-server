const router = require('express').Router()
const User = require('../models/user.model')

router.route('/user').get((req, res) => {
  res.send('I AM A USER')
})


module.exports = router