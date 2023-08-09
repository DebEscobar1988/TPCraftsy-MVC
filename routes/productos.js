const express= require('express');
const productosController = require('../controllers/productosController');

const router = express.Router();

router.get('/detail/:id', productosController.detail) 
module.exports= router