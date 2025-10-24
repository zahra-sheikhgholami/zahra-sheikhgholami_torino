import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "صفحه مورد نظر یافت نشد!"
}

function NotFound() {
  return (
    <div className="flex flex-col sm:flex-row-reverse justify-center items-center gap-x-10 lg:gap-x-30 container mx-auto mt-10 mb-20">
      <Image
        src="/images/error404.webp"
        width={1665}
        height={1665}
        alt="page not found"
        priority
        className="h-[322px] w-[322px] lg:h-[555px] lg:w-[555px]"
      />
      <div className="text-center flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-20">
        <p className="font-semibold text-2xl md:text-3xl xl:text-4xl text-black">
          صفحه مورد نظر یافت نشد!
        </p>
        <div>
          <Link
            href="/"
            className="bg-primary-200 text-primary py-3 px-4 md:px-8 rounded-2xl font-semibold text-xl md:text-2xl lg:text-[28px]"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NotFound