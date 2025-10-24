import { Profile, SunFog, ConvertCard } from "iconsax-reactjs";

export const dashboardLinks = [
  {
    id: 1,
    href: "/dashboard/profile",
    title: "پروفایل",
    iconBold: <Profile className="w-4 h-4 md:w-5 md:h-5" variant="Bold" />,
  },
  {
    id: 2,
    href: "/dashboard/my-tours",
    title: "تورهای من",
    iconBold: <SunFog className="w-4 h-4 md:w-5 md:h-5" variant="Bold" />,
  },
  {
    id: 3,
    href: "/dashboard/transactions",
    title: "تراکنش ها",
    iconBold: <ConvertCard className="w-4 h-4 md:w-5 md:h-5" variant="Bold" />,
  },
];
