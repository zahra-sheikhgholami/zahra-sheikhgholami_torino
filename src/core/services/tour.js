import api from "@/src/core/configs/api.js";

const getTours = async (params = "") => {
  const res = await api.get(`/tour${params ? `?${params}` : ""}`);
  return res.data || [];
};

const addToBasket = async (id) => {
  const res = await api.put(`/basket/${id}`);
  return res.data;
};

const getBasket = async () => {
  const res = await api.get(`/basket`);
  return res.data;
};

const order = async (data) => {
  const res = await api.post(`/order`, data);
  return res.data;
};

export { addToBasket, getBasket, getTours, order };
