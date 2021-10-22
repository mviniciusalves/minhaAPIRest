// controllers recebem requisições das rotas, interagem com o model quando necessário e responde

class ProductsController {

    get(req, res) {
        return res.json({ Produto: 'Notebook', Tipo: 'Informática' })
    }
}

export default ProductsController