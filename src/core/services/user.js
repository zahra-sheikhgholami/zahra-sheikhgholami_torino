import api from "@/src/core/configs/api.js";

const getUserProfile = async () => {
  const res = await api.get("/user/profile");
  return res.data;
};

const updateUserProfile = async (data) => {
  const res = await api.put("/user/profile", data);
  return res.data;
};

const getUserTours = async () => {
  const res = await api.get("/user/tours");
  return res.data;
};

const getUserTransactions = async () => {
  const res = await api.get("/user/transactions");
  return res.data;
};

export { getUserProfile, updateUserProfile, getUserTours, getUserTransactions };
