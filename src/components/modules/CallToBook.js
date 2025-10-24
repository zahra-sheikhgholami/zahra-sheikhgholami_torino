import Image from "next/image";

function CallToBook() {
  return (
    <section className="container mx-auto px-8 md:px-4 mt-14 bg-white">
      <div className="md:grid md:grid-cols-4 border border-dark-200 rounded-[10px]">
        <div className="relative h-32 md:h-44 lg:h-60 pt-3 pr-2 md:pr-8 lg:pr-14 md:py-8 lg:pt-10 col-span-4 md:col-span-3 bg-primary rounded-tl-[10px] rounded-tr-[10px] md:rounded-[10px]">
          <div className="text-white">
            <h2 className="font-extrabold text-lg sm:text-[22px] md:text-3xl lg:text-5xl">
              خرید تلفنی از <span className="text-secondary">تورینو</span>
            </h2>
            <p className="text-sm md:text-xl lg:text-3xl mt-2 md:pt-4 lg:pt-6">
              به هرکجا که میخواهید!
            </p>
          </div>
          <div className="absolute left-0 md:left-10 bottom-0">
            <Image
              src="/images/man-talking.webp"
              width={616}
              height={450}
              alt="call-to-book"
              priority
              className="h-40 w-48 lg:h-56 lg:w-[308px]"
            />
          </div>
        </div>
        <div className="flex md:flex-col items-center justify-between md:justify-center md:gap-y-5 font-vazirmatn-fd  py-3 px-6">
          <div className="text-dark-900 flex items-center justify-center gap-x-2">
            <span className="text-xl md:text-2xl lg:text-[28px] font-bold md:text-black">
              021-1840
            </span>
            <svg
              className="fill-dark-900 w-5 h-5 md:w-6 md:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z"
                strokeWidth="1"
                strokeMiterlimit="10"
              ></path>
            </svg>
          </div>
          <button className="bg-secondary text-white text-sm lg:text-base font-medium py-2 px-6 lg:px-10 rounded-[10px]">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </section>
  );
}
export default CallToBook;
