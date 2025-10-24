import SwiperImages from "./SwiperImages";

function WhyTorino() {
  return (
    <section className="container mx-auto px-8 md:px-4 mt-20 font-vazirmatn-fd">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[100px, 1fr]">
        <div className="flex items-center gap-x-2 lg:gap-x-4 text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6">
          <div
            className="w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-linear-to-t from-secondary to-primary 
         text-white grid place-content-center"
          >
            ؟
          </div>
          <h1 className="text-secondary">
            چرا <span className="text-primary">تورینو</span> ؟
          </h1>
        </div>
        <div className="text-dark-900 lg:pl-20">
          <h2 className="text-xl lg:text-2xl font-medium">
            تور طبیعت گردی و تاریخی
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-justify leading-8 lg:leading-10 mt-6">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
        <SwiperImages />
        
      </div>
    </section>
  );
}
export default WhyTorino;
