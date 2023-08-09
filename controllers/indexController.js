
const tutoriales = require('../data/tutoriales.json');
const productos = require('../data/productos.json')



module.exports = {
    index : (req,res) => {
       /*  res.send(productos) */
        return res.render('index', {
            tutoriales,  
            productos
        })
    }
}