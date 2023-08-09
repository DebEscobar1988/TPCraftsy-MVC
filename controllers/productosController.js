
const productos = require('../data/productos.json');


module.exports = {
    detail : (req,res) => {

        const id = req.params.id;
        const productoId = productos.find(producto => producto.id === +id);

        return res.render('detail', {
            productoId
        })
    }
}