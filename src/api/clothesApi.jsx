// api/BookApi.js
import axios from 'axios';

const baseUrl = 'http://localhost:4000/clothes';

export const getAllClothes = async () => {
  return axios.get(baseUrl);
};

export const getClothesById = async (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

export const createClothes = async (product) => {
  return axios.post(baseUrl, product);
};

export const updateClothes = async (id, product) => {
  return axios.put(`${baseUrl}/${id}`, product);
};

export const deleteClothes= async (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};
