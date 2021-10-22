// rota products

import express from 'express'
import ProductsController from '../controllers/products'
import Product from '../models/product'

const router = express.Router()

const productsController = new ProductsController(Product)
router.get('/', (req, res) => {
    productsController.get(req, res)
})

router.get('/', (req, res) => { // busca por id
    productsController.getById(req, res)
})

router.post('/', (req, res) => { // criar
    productsController.create(req, res)
})

export default router