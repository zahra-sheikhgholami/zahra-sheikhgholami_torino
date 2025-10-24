export const metadata = {
  title: "درباره ما | تورینو",
};

function AboutUs() {
  return (
    <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
      <div className="container mx-auto bg-white rounded-[10px] md:border border-dark-200 py-8 md:px-6">
        <h1 className="text-2xl font-bold text-secondary">درباره ما</h1>
        <p className="text-base lg:text-xl text-dark-800 text-justify leading-8 lg:leading-10 mt-6">
          ما در <span className="font-semibold">تورینو (Tourino) </span> باور
          داریم که سفر فقط جابجایی بین دو نقطه نیست؛ بلکه فرصتی است برای تجربه،
          آشنایی، آرامش و ساختن خاطراتی ماندگار.
        </p>
        <p className="text-base lg:text-xl text-dark-800 text-justify leading-8 lg:leading-10 mt-2">
          تورینو با تیمی از متخصصان گردشگری و عاشقان سفر شکل گرفته تا فرایند
          رزرو تور را ساده، شفاف و لذت‌بخش کند.
        </p>
        <p className="text-base lg:text-xl text-dark-800 text-justify leading-8 lg:leading-10 mt-2">
          هدف ما این است که هر مسافر، بدون دغدغه و با اطمینان خاطر، بتواند مقصد
          دلخواه خود را پیدا کند، قیمت‌ها را مقایسه کند و تنها با چند کلیک، رزرو
          خود را نهایی کند.
        </p>

        <div className="mt-12">
          <h1 className="text-2xl font-bold text-secondary ">چرا تورینو ؟</h1>
          <p className="text-base lg:text-xl text-dark-800 text-justify leading-8 lg:leading-10 mt-4">
            چون در تورینو شما فقط یک تور رزرو نمی‌کنید؛ بلکه تجربه‌ای مطمئن،
            هوشمند و اختصاصی از سفر را به‌دست می‌آورید.
          </p>
          <p className="text-base lg:text-xl text-dark-800 text-justify leading-8 lg:leading-10 mt-2">
            ما معتقدیم که سفر، شروع دوباره‌ی زندگی است و تورینو، هم‌سفر مطمئن
            شما در این مسیر خواهد بود.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
