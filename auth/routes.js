const { Router } = require('express')
const toJWT = require('./jwt')

const router = new Router()

// define endpoints here

router.post('/logins', (req, res, next) => {
  
   const  email = req.body.email
   const  password = req.body.password
  
  if (!email || !password) {
    res.status(400).send({
      message: 'Please supply a valid email and password'
    })
  }
  if (email || password) {
    res.send({
      jwt: toJWT({ userId: 1 })
    })
  }
})

module.exports = router