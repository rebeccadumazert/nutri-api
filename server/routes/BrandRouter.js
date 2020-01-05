const router = require('express').Router();

const {
  getBrands,
  getBrandDetails,
  getItemDetails,
} = require('../controllers/getBrands.js');

router.get('/:id', getBrands);
router.get('/details/:id', getBrandDetails);
router.get('/item/details/:id', getItemDetails);

module.exports = router;
