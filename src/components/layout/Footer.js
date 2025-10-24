import Image from "next/image";
import { images, footerItems } from "@/src/core/constants/footer.js";
import Logo from "@/src/components/modules/Logo";

function Footer() {
  return (
    <footer className="w-screen px-8 md:px-0">
      <div className="container mx-auto border-t border-dashed md:border-solid border-black/20 flex flex-col sm:flex-row justify-between gap-y-5 py-4 md:py-8 md:px-2">
        <div className="flex justify-between sm:justify-start gap-x-10 lg:gap-x-20 xl:gap-x-30">
          {footerItems.map((items, index) => (
            <div key={index} className="text-dark-900">
              <h3 className="font-semibold text-xl md:text-2xl mb-4">
                {items.title}
              </h3>
              <ul>
                {items.items.map((item) => (
                  <li key={item.id} className="text-base md:text-lg mt-2">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-row-reverse sm:flex-col items-end  gap-x-6 sm:gap-x-0 gap-y-4 ">
          <div className="flex-1">
            <Logo />
            <p className="text-[14px] md:text-[15px] text-black md:mt-4">
              تلفن پشتیبانی :
              <span className="font-vazirmatn-fd pr-2" dir="ltr">
                021-8574
              </span>
            </p>
          </div>
          <div className="flex flex-1 flex-wrap justify-center md:items-end gap-x-4 gap-y-2 md:gap-x-6 lg:gap-x-8">
            {images.map((image, index) => (
              <Image
                key={index}
                src={`/images/footer/${image.src}`}
                width={image.width}
                height={74}
                alt={image.alt}
                priority
                className="h-10 md:h-[60px] lg:h-[74px] w-auto"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-black/20 text-center py-2">
        <p className="text-xs md:text-[15px] text-black">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
