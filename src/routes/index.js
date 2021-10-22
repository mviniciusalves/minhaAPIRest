// separar e administrar as rotas do app

import express from 'express'
import productsRoute from './products'

const router = express.Router() // middleware para lidar com rotas

router.get('/', (req, res) => {
    res.send('Aplicação online')    
})

router.use('/products', productsRoute)

export default router // exportando o Router