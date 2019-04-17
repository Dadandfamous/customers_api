const {
  Router
} = require('express')
const User = require('./model')

const router = new Router()

router.post('/user', (req, res, next) => {
  User
    .create(req.body)
    .then(user => {

      const email = req.body.email
      const password = req.body.password

      if (!email || !password) {
        res.status(400).send({
          message: 'Please supply a valid email and password'
        })
      }
      return res.status(201).send(user)

    })
    .catch(error => next(error))
})

module.exports = router