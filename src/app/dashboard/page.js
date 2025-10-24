"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function Dashboard() {
  const pathname = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    if (pathname === "/dashboard") {
      router.replace("/dashboard/profile");
    }
  }, [pathname,router]);
  return <div></div>;
}
export default Dashboard;
