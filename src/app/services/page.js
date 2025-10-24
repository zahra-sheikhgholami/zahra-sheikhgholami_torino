import { services } from "@/src/core/constants/services";

export const metadata = {
  title: "خدمات گردشگری | تورینو",
};

function Services() {
  return (
    <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
      <div className="container mx-auto bg-white rounded-[10px] md:border border-dark-200 py-8 md:px-6">
        <h1 className="text-2xl font-bold text-secondary">
          خدمات گردشگری ما
        </h1>
        <p className="text-base lg:text-xl text-dark-800 text-justify leading-8 lg:leading-10 mt-6">
          ما در تلاشیم تا سفری آرام، آسان و به‌صرفه را برای مسافران خود فراهم
          کنیم. تمام خدمات گردشگری ما با هدف راحتی، شفافیت و پشتیبانی کامل از
          مسافران طراحی شده‌اند.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8">
          {services.map((service) => (
            <div key={service.id} className="flex items-start gap-2 sm:gap-x-4">
              <div className="p-3 bg-zinc-100 rounded-xl w-12 h-12">{service.icon}</div>
              <div>
                <h2 className="sm:text-lg md:text-xl font-semibold text-dark-90">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Services;
