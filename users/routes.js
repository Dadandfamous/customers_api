const { Router } = require('express')
const User = require('./model')

const router = new Router()

router.post('/users', (req, res, next) => {
  console.log('req.body test:', req.body)

  User
  .create(req.body)
  .then(user => {
    if (!user) {
      return res.status(404).send({
          message: 'Not a user'
      })
    }
    return res.status(201).send(user)
   })
   .catch(error => next(error))

//   const  email = req.body.email
//   const  password = req.body.password

// if (!email || !password) {
//   res.status(400).send({
//     message: 'Please supply a valid email and password'
//   })
// }
//   User
//   .create(req.body)
//   .then(user => {
// console.log("faafsafsasdf",user)
     
//     return res.status(201).send(user)
//   })
//   .catch(error => next(error))
})

module.exports = router