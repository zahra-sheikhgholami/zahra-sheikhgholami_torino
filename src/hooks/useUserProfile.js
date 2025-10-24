import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/src/core/services/user";
import { getNewToken } from "@/src/core/services/token";
import { getCookie, setCookie } from "@/src/core/utils/cookie";

export const useUserProfile = () => {
  const router = useRouter()
  const pathname = usePathname()
  const fetchUser = async () => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");

    if (!accessToken && !refreshToken) {
      if(pathname.includes("dashboard") || pathname === "/checkout") {
        router.replace("/")
      }
      return null
    };

    if (!accessToken && refreshToken) {
      try {
        const response = await getNewToken();
        setCookie("accessToken", response?.accessToken, 1);
      } catch (error) {
        toast.error(error?.response?.data?.message);
        removeCookie();
        return null;
      }
    }

    try {
      const response = await getUserProfile();
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return null;
    }
  };

  const query = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUser,
  });

  return query;
};
