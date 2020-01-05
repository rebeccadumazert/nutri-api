const axios = require('axios');

const BASE_URL = 'https://api.nutritionix.com/v1_1/';

const params = {
  appId: '3670acbf',
  appKey: '4570c0ec3ff770386cc67e04a0633541',
};

const getDetailsBrands = async id => {
  console.log('hello');
  try {
    const { data } = await axios.get(`${BASE_URL}brand/${id}`, {
      params,
    });
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getDetailsMenuBrand = async id => {
  const { data } = await axios.get(`${BASE_URL}search`, {
    params: {
      ...params,
      brand_id: id,
    },
  });
  return data;
};

const getDetailsItemMenu = async id => {
  const { data } = await axios.get(`${BASE_URL}item`, {
    params: {
      ...params,
      id: id,
    },
  });
  return data;
};

module.exports = { getDetailsBrands, getDetailsMenuBrand, getDetailsItemMenu };
