const { Router } = require('express')
const customerRouter = require('./customers/routes')

const router = new Router()

router.get('/', (req, res, next) => res.send('hello world'))

router.use(customerRouter)

module.exports = router
