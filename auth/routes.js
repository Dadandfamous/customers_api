const { Router } = require('express')
const { toJWT } = require('./jwt')
const  auth  = require('./middleware')

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
    res.send({
      jwt: toJWT({ userId: 1 })
    })
})

router.get('/secret-endpoint', auth, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.email}.`,
  })
})

module.exports = router