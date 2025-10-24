"use client";
import Link from "next/link";
import { CloseCircle, TickCircle } from "iconsax-reactjs";

function UserPaymentPage({searchParams}) {
  const status = searchParams.status;
  const isSuccess = status === "success"
  return (
    <div className="md:border border-dark-200 rounded-[10px] py-10 flex justify-center items-center">
      {isSuccess ? (
        <div className="flex flex-col justify-center items-center">
          <TickCircle className="text-primary w-20 h-20" />
          <p className="mt-5 text-lg lg:text-2xl font-medium text-dark-800">
            پرداخت با موفقیت انجام شد.
          </p>
          <Link
            href="/dashboard/my-tours"
            className="mt-10 text-complementry text-lg bg-sky-50 py-2 px-4 rounded-lg"
          >
            برو به تورهای من
          </Link>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <CloseCircle className="text-rose-600 w-20 h-20" />
          <p className="mt-5 text-lg lg:text-2xl font-medium text-dark-800">
            پرداخت ناموفق بود.
          </p>
          <Link
            href="/dashboard/my-tours"
            className="mt-10 text-complementry text-lg bg-sky-50 py-2 px-4 rounded-lg"
          >
            برو به تورهای من
          </Link>
        </div>
      )}
    </div>
  );
}
export default UserPaymentPage;
