import api from "@/src/core/configs/api.js";

const sendOtp = async (data) => {
  const res = await api.post("/auth/send-otp", data);
  return res.data;
};

const checkOtp = async (data) => {
  const res = await api.post("/auth/check-otp", data);
  return res.data;
};

export { sendOtp, checkOtp };
