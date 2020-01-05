import axios from 'axios';

export const getBrands = async id => {
  const { data } = await axios.get(`/api/v1/brands/${id}`);
  return data;
};

export const getDetailsBrand = async id => {
  const { data } = await axios.get(`/api/v1/brands/details/${id}`);
  return data;
};

export const getDetailsItem = async id => {
  const { data } = await axios.get(`/api/v1/brands/item/details/${id}`);
  return data;
};
