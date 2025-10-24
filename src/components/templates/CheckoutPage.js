"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { BagCross, Profile } from "iconsax-reactjs";

import { getTourDays } from "@/src/core/utils/tour";
import { getBasket, order } from "@/src/core/services/tour";
import { travelerInformation } from "@/src/core/schema/user";
import { birthDateFormat } from "@/src/core/utils/user";
import { useUserProfile } from "@/src/hooks/useUserProfile";
import BirthDatePicker from "@/src/components/modules/BirthDatePicker";
import Loader from "@/src/components/modules/Loader";
import SkeletonCheckout from "@/src/components/skeletons/SkeletonCheckout";

function CheckoutPage() {
  const [birthDate, setBirthDate] = useState("");
  const [birthDateError, setBirthDateError] = useState("");

  const queryClient = useQueryClient();
  const router = useRouter();

  const schema = travelerInformation;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const {
    data: tour = null,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["order"],
    queryFn: getBasket,
    refetchOnMount: true,
  });

  const { data } = useUserProfile();

  useEffect(() => {
    if (data) {
      reset({
          ...data,
          nationalCode: data.notionalCode ? +data.notionalCode : "",
          fullName: `${data.firstName} ${data.lastName}`,
        });
    }
  }, [data, reset]);

  const resetTravelerHandler = () => {
    reset({ fullName: "", nationalCode: "", birthDate: "", gender: "" });
    setBirthDate("");
  };

  const { mutate, isPending: isPendingSubmit } = useMutation({
    mutationFn: order,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.setQueryData(["userTours"], (prevData = []) => [...prevData, tour]);
      router.push("/dashboard/payment?status=success");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است");
      console.error(error);
    },
  });

  const onSubmit = async (data) => {
    if (!birthDate) {
      setBirthDateError("تاریخ تولد الزامی است");
    } else {
      setBirthDateError("");
      mutate({
        ...data,
        nationalCode: data.nationalCode.toString(),
        birthDate: birthDateFormat(birthDate),
      });
    }
  };

  if (isPending && !tour) {
    return (
      <>
        <SkeletonCheckout />
        <Loader />
      </>
    );
  }

  if (isError || !tour) {
    return (
      <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
        <div className="container mx-auto lg:min-h-50 bg-white py-15 flex flex-col justify-center items-center rounded-[10px] border border-dark-200">
          <BagCross className="w-14 h-14 text-dark-500" />
          <h2 className="text-lg lg:text-2xl font-bold text-dark-600 mt-8">
            سبد خرید شما خالی می باشد.
          </h2>
        </div>
      </div>
    );
  }

  const { title, startDate, endDate, price } = tour;
  const days = getTourDays(startDate, endDate) || 1;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-x-4 px-2">
        <div className="grid-cols-1 lg:col-span-2 xl:col-span-3 bg-white rounded-[10px] border border-dark-200 p-4">
          <div className="flex items-center">
            <Profile className="w-6 h-6" variant="Bold" />
            <h2 className="font-vazirmatn-fd text-2xl text-black">
              مشخصات مسافر
            </h2>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-2 lg:gap-x-4 text-sm">
              <div className="flex flex-col">
                <input
                  {...register("fullName")}
                  name="fullName"
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="border border-dark-500 w-full p-2 rounded-[5px] placeholder:text-dark-500 text-dark- outline-complementry"
                />
                <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
                  {errors.fullName?.message}
                </span>
              </div>
              <div className="flex flex-col">
                <input
                  {...register("nationalCode")}
                  name="nationalCode"
                  type="text"
                  placeholder="کد ملی"
                  className="border border-dark-500 w-full p-2 rounded-[5px] placeholder:text-dark-500 text-dark-900 outline-complementry"
                />
                <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
                  {errors.nationalCode?.message}
                </span>
              </div>
              <div className="flex flex-col relative">
                <BirthDatePicker
                  birthDate={birthDate}
                  setBirthDate={setBirthDate}
                  date={data?.birthDate}
                />
                <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
                  {birthDateError}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="border border-dark-500 rounded-[5px] pl-2">
                  <select
                    {...register("gender")}
                    name="gender"
                    className=" w-full pt-2 pb-1.5 px-2 text-dark-900 outline-0"
                  >
                    <option value="">جنسیت</option>
                    <option value="female">زن</option>
                    <option value="male">مرد</option>
                  </select>
                </div>
                <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
                  {errors.gender?.message}
                </span>
              </div>
            </div>
          </div>
          <div className="text-left">
            <button
              type="button"
              onClick={resetTravelerHandler}
              className="cursor-pointer text-complementry border-b border-complementry px-2"
            >
              ثبت برای مسافر دیگر
            </button>
          </div>
        </div>
        <div className="col-span-1 h-fit py-2 bg-white rounded-[10px] border md:border-0 border-dark-100">
          <div className="flex justify-between items-center flex-wrap p-4 border-b border-dashed border-dark-500">
            <h2 className="font-semibold text-2xl text-black">{title}</h2>
            <p className="font-vazirmatn-fd text-[rgba(40,40,40,0.5)]">
              {days} روز و {days - 1} شب
            </p>
          </div>
          <div className="p-4 font-vazirmatn-fd">
            <div className="flex justify-between items-center flex-wrap">
              <span className="text-dark-900">قیمت نهایی</span>
              <div className="">
                <span className="text-complementry text-[28px] font-medium">
                  {price?.toLocaleString()}
                </span>
                <span className="text-sm text-dark-600 pr-1">تومان</span>
              </div>
            </div>
            <button
              type="submit"
              disabled={isPendingSubmit}
              className="w-full bg-primary text-white rounded-[10px] text-2xl py-2 mt-4 cursor-pointer disabled:cursor-not-allowed disabled:opacity-75"
            >
              ثبت و خرید نهایی
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default CheckoutPage;
