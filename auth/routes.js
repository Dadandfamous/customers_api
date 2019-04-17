const { Router } = require('express')
const Login = require('./jwt')

const router = new Router()

// define endpoints here



router.post('/logins', (req, res, next) => {
  Login
    .create(req.body)
    .then(login => {
      if (!login) {
        res.status(400).send({
          message: 'Please supply a valid email and password'
        })
      }
      res.send({
        jwt: toJWT({ userId: 1 })
      })
    })
    .catch(error => next(error))
})

module.exports = router