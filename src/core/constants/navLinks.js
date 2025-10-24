import { AirplaneSquare, Call, Home2, VolumeLow1 } from "iconsax-reactjs";

export const navLinks = [
  { id: 1, href: "/", title: "صفحه اصلی" , icon: <Home2 size="16"/>, iconBold: <Home2 size="16" variant="Bold" />},
  { id: 2, href: "/services", title: "خدمات گردشگری", icon: <AirplaneSquare size="16"/>, iconBold: <AirplaneSquare size="16" variant="Bold"/> },
  { id: 3, href: "/about-us", title: "درباره ما" , icon: <VolumeLow1 size="16"/>, iconBold: <VolumeLow1 size="16" variant="Bold"/>},
  { id: 4, href: "/contact-us", title: "تماس با ما", icon: <Call size="16"/>, iconBold: <Call size="16" variant="Bold"/> },
];