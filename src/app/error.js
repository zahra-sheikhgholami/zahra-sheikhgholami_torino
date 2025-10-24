"use client";

import Image from "next/image";

export const metadata = {
  title: "اتصال با سرور برقرار نیست!",
};

function Error({error, reset}) {
  console.error("global error:", error);
  
  return (
    <div className="flex flex-col sm:flex-row-reverse justify-center items-center gap-x-10 lg:gap-x-30 container mx-auto mt-10 mb-20">
      <Image
        src="/images/error500.webp"
        width={1665}
        height={1665}
        alt="page not found"
        priority
        className="h-[322px] w-[322px] lg:h-[555px] lg:w-[555px]"
      />
      <div className="flex flex-col gap-y-6 text-center md:text-right">
        <p className="font-semibold text-2xl md:text-3xl xl:text-4xl text-black">
          اتصال با سرور برقرار نیست!
        </p>
        <div className="text-dark-900 font-semibold md:text-xl">
          لطفا بعدا دوباره امتحان کنید.
        </div>
      </div>
    </div>
  );
}
export default Error;
