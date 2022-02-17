const express = require('express')
const router = express.Router()
const controller = require('../controllers/Product')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)
// Доболнительно
router.get('/:key/:value', controller.getByObject)

module.exports = router