import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { checkOtp, sendOtp } from "@/src/core/services/auth";
import { removeCookie, setCookie } from "@/src/core/utils/cookie";
import { useUserProfile } from "./useUserProfile";
import { getUserProfile } from "../core/services/user";

export const useAuthMutations = () => {

  const queryClient = useQueryClient();

  const sendOtpMutation = useMutation({
    mutationFn: sendOtp,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است");
    },
  });

  const checkOtpMutation = useMutation({
    mutationFn: checkOtp,
    onSuccess: async (data) => {
      toast.success("با موفقیت وارد حساب کاربری شدید.");
      setCookie("accessToken", data.accessToken, 1);
      setCookie("refreshToken", data.refreshToken, 24 * 7);
      const user = await getUserProfile()
      queryClient.setQueryData(["userProfile"], user);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است");
    },
  });

  const logout = () => {
    removeCookie();
    queryClient.setQueryData(["userProfile"], null);
    toast.info("خروج با موفقیت انجام شد");
  };

  return { sendOtpMutation, checkOtpMutation, logout };
};
