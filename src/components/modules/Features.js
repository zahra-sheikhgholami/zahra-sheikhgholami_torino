import Image from "next/image";
import { featureItems } from "@/src/core/constants/features";

function Features() {
  return (
    <section className=" mx-8 md:mx-0 mt-20 border-t border-dark-200">
      <div className=" container mx-auto grid md:grid-cols-3 place-content-center gap-10  py-8">
        {featureItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-x-4 text-dark-900 font-vazirmatn-fd"
          >
            <Image
              width={item.width}
              height={item.height}
              alt="feature"
              src={item.image}
              priority
              className="w-[72px] h-16 lg:w-[110px] lg:h-25"
            />
            <div>
              <h3 className="text-sm lg:text-[26px] font-medium">
                {item.title}
              </h3>
              <p className="text-xs lg:text-base font-light mt-2">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Features;
