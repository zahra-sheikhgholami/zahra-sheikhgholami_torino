import api from "@/src/core/configs/api.js";
import { getCookie } from "@/src/core/utils/cookie";

const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken");

  if (!refreshToken) return;

  const res = await api.post("/auth/refresh-token", { refreshToken });
  return res.data;
};

export { getNewToken };
