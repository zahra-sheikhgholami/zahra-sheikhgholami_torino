"use client";

import { getUserTransactions } from "@/src/core/services/user";
import { useQuery } from "@tanstack/react-query";
import moment from "jalali-moment";

import Loader from "@/src/components/modules/Loader";
import SkeletonUserTransactions from "@/src/components/skeletons/SkeletonUserTransactions";

function UserTransactionsPage() {
  const { data = null, isPending } = useQuery({
    queryKey: ["userTransactions"],
    queryFn: getUserTransactions,
  });

  if (isPending && !data) {
    return (
      <>
        <SkeletonUserTransactions />
        <Loader />
      </>
    );
  }

  return (
    <div className="bg-white border border-dark-200 rounded-[10px] overflow-x-scroll h-fit">
      <table className="table-auto w-full">
        <thead className="bg-[#DBDBDB] lg:bg-[#F3F3F3]">
          <tr className="text-right text-xs md:text-base text-dark-900">
            <th className="py-4 pr-4 font-normal min-w-36 md:min-w-40">
              تاریخ و ساعت
            </th>
            <th className="py-4 px-2 font-normal min-w-28 md:min-w-40">
              مبلغ <span className="text-[10px] md:text-base">(تومان)</span>
            </th>
            <th className="py-4 px-2 font-normal min-w-36 md:min-w-40">
              نوع تراکنش
            </th>
            <th className="py-4 px-2 font-normal min-w-40 md:min-w-44">
              شماره سفارش
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.length ? (
            data.map((item) => (
              <tr
                key={item.id}
                className="text-[13px] md:text-sm text-dark-900 md:text-black font-light font-vazirmatn-fd"
              >
                <td className="py-4 pr-4 text-xs md:text-sm">
                  {moment(item.createdAt)
                    .locale("fa")
                    .format("HH:mm - YYYY/MM/DD")}
                </td>
                <td className="py-4 px-2">{item.amount.toLocaleString()}</td>
                <td className="py-4 px-2">
                  {item.type === "Purchase" ? "ثبت نام در تور گردشگری" : "-"}
                </td>
                <td className="py-4 px-2">سفارش {item.id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                <div className="flex justify-center items-center h-26 my-6 mx-6 text-lg lg:text-xl font-medium rounded-3xl">
                  تراکنشی نداشته اید.
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default UserTransactionsPage;
