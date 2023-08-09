
const totalProductos = require('../data/productos.json');


module.exports = {
    detail : (req,res) => {

        const id = req.params.id;
        const productos = totalProductos.find(producto => producto.id === +id);

        return res.render('detail', {
            productos
        })
    }
}