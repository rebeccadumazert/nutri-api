const {
  getDetailsBrands,
  getDetailsMenuBrand,
  getDetailsItemMenu,
} = require('../stores/brandStore');

const getBrands = async (req, res) => {
  const { id } = req.params;
  const results = await getDetailsBrands(id);
  res.json({ results });
};

const getBrandDetails = async (req, res) => {
  const { id } = req.params;
  const results = await getDetailsMenuBrand(id);
  res.json({ results });
};

const getItemDetails = async (req, res) => {
  const { id } = req.params;
  const results = await getDetailsItemMenu(id);
  res.json({ results });
};

module.exports = { getBrands, getBrandDetails, getItemDetails };
