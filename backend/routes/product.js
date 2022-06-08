const router = require('express').Router();
const Product = require('../models/Product');
const authenticateJWT = require('./verifyToken');

//POST product
router.post('/product', async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
  });
  const result = {
    message: 'Product berhasil ditambahkan',
    data: {
      product,
    },
  };
  try {
    const productSaved = product.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

//GET ALL
router.get('/product', authenticateJWT, (req, res) => {
  const product = Product.find({}, function (err, products) {
    if (err) {
      res.status(404).send('Tidak dapat mengambil data');
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Product berhasil ditampilkan',
        data: {
          products,
        },
      });
    }
  });
});

//GET product ID [DONE]
router.get('/product/:id', authenticateJWT, (req, res) => {
  const product = Product.findById(req.params.id, function (err, products) {
    if (err) {
      res.status(404).send('Product tidak ditemukan');
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Product berhasil ditampilkan',
        data: {
          products,
        },
      });
    }
  });
});

module.exports = router;
