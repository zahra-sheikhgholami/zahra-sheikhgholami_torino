import { Car, Global, Headphone, ShieldTick } from "iconsax-reactjs";

export const services = [
  {
    id: 1,
    title: "رزرو تورهای داخلی و خارجی",
    description:
      "با تنوعی از تورهای گروهی، خانوادگی و ماجراجویانه در بهترین مقاصد",
    icon: <Global className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "خدمات ترانسفر فرودگاهی",
    description:
      "از لحظه ورود تا محل اقامت، ترانسفر رفت و برگشت با خودروهای راحت و ایمن",
    icon: <Car className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "مشاوره و پشتیبانی سفر",
    description:
      "راهنمایی در انتخاب مقصد، برنامه‌ریزی سفر، و پاسخ‌گویی در تمام مراحل رزرو.",
    icon: <Headphone className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "اخذ ویزا و بیمه مسافرتی",
    description:
      "همکاری با موسسات معتبر جهت اخذ ویزا و بیمه برای سفرهای خارجی.",
    icon: <ShieldTick className="w-6 h-6" />,
  },
];
