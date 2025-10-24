"use client";

import { useEffect } from "react";
import { useUserProfile } from "@/src/hooks/useUserProfile";
import { useRouter } from "next/navigation";

function AuthDashboardProvider({ children }) {
  const router = useRouter();

  const { data, isPending } = useUserProfile();

  const user = data || null;

  useEffect(() => {
    if (!user && !isPending) {
      router.replace("/");
    }
  })


  return <>{children}</>;
}
export default AuthDashboardProvider;
