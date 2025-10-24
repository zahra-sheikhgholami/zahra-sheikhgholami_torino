import { Call, Location, Sms } from "iconsax-reactjs";

export const metadata = {
  title: "تماس با ما | تورینو",
};
function ContactUs() {
  return (
    <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
      <div className="container mx-auto bg-white rounded-[10px] md:border border-dark-200 py-8 md:px-6">
        <h1 className="text-2xl font-bold text-secondary">
          با ما در ارتباط باشید
        </h1>
        <p className="text-base lg:text-xl text-dark-800  leading-8 lg:leading-10 mt-6">
          تیم پشتیبانی تورینو همیشه آماده‌ی پاسخ‌گویی به شماست.
        </p>
        <p className="text-base lg:text-xl text-dark-800  leading-8 lg:leading-10 mt-2">
          چه برای رزرو تور، چه برای پرسیدن سؤال، یا حتی برای پیشنهاد همکاری ، ما
          با روی باز پذیرای پیام‌ها، تماس‌ها و بازخوردهای ارزشمند شما هستیم.
        </p>
        <div className="mt-12">
          <h1 className="text-2xl font-bold text-secondary">
            راه‌های ارتباط با ما
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-y-8">
            <div className="flex items-start gap-x-4">
              <div className="flex justify-center items-center bg-zinc-100 rounded-xl w-10 h-10">
                <Call className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-dark-90">
                  تلفن پشتیبانی :
                </h2>
                <p className="mt-2 font-vazirmatn-fd text-base font-medium">
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </p>
                <p className="mt-2 text-sm">
                  پاسخ‌گویی همه‌روزه از ساعت ۹ صبح تا ۶ عصر
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-4">
              <div className="flex justify-center items-center bg-zinc-100 rounded-xl w-10 h-10">
                <Sms className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-dark-90">
                  ایمیل :
                </h2>
                <p className="mt-2 text-base font-medium">
                  support@tourino.com
                </p>
                <p className="mt-2 text-sm">
                  در هر ساعت شبانه‌روز می‌توانید پیام خود را ارسال کنید. تیم ما
                  در سریع‌ترین زمان پاسخ‌گو خواهد بود.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-4">
              <div className="flex justify-center items-center bg-zinc-100 rounded-xl w-10 h-10">
                <Location className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-dark-90">
                  آدرس دفتر مرکزی :
                </h2>
                <p className="mt-2 text-sm">
                تهران، خیابان ولیعصر، ساختمان تورینو
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
