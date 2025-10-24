"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import moment from "jalali-moment";
import { toast } from "react-toastify";

import {
  Bus,
  Calendar,
  Calendar2,
  Map1,
  MedalStar,
  Profile2User,
  Routing2,
  Security,
  UserTick,
} from "iconsax-reactjs";

import { getTourDays } from "@/src/core/utils/tour";
import { addToBasket } from "@/src/core/services/tour";
import { cityTranslations, fleetVehicles } from "@/src/core/constants/tour";
import { useUserProfile } from "@/src/hooks/useUserProfile";
import AuthForm from "@/src/components/modules/AuthForm";
import Modal from "@/src/components/modules/Modal";

function TourDetailPage({ tour }) {
  const {
    id,
    title,
    price,
    image,
    startDate,
    endDate,
    origin,
    fleetVehicle,
    options,
    capacity,
    insurance,
    availableSeats,
  } = tour;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const days = getTourDays(startDate, endDate);

  const { data: user } = useUserProfile();

  const reserveHandler = async () => {
    if (user) {
      setIsPending(true);
      try {
        const res = await addToBasket(id);
        toast.success(res?.message);
        queryClient.setQueryData(["order"], tour);
        router.push("/checkout");
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        if (error.status === 401) {
          toast.error("لطفا وارد حساب کاربری شوید");
        } else {
          toast.error("مشکلی رخ داده است");
        }
      }
    } else {
      setIsOpenModal(true);
    }
  };

  return (
    <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
      <div className="container mx-auto bg-white rounded-[10px] md:border border-dark-200 py-6 md:px-5">
        <div className="grid grid-cols-1 auto-rows-auto lg:grid-cols-[400px_1fr] gap-y-8 lg:gap-6 mb-8 lg:mb-0">
          <div className=" lg:row-span-2 place-self-center">
            <Image
              src={image}
              width={279}
              height={159}
              alt={title}
              priority
              className="w-[400px] h-[265px]  rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex lg:flex-col items-center lg:items-start justify-between ">
              <h2 className="text-2xl lg:text-[32px] font-bold text-black">
                {title}
              </h2>
              <p className="font-vazirmatn-fd text-[15px] lg:text-xl text-dark-900 lg:mt-4">
                {days} روز و {days - 1} شب
              </p>
            </div>
            <div className="text-stone-500 flex flex-wrap gap-x-3 lg:gap-x-10 mt-5">
              <div className="flex gap-1.5 lg:gap-x-2 items-center">
                <UserTick
                  className="w-3.5 h-3.5 lg:w-6 lg:h-6"
                  variant="Bold"
                />
                <p className="text-sm">تورلیدر از مبدا</p>
              </div>
              <div className="flex gap-1.5 lg:gap-x-2 items-center">
                <Map1 className="w-3.5 h-3.5 lg:w-6 lg:h-6" variant="Bold" />
                <p className="text-sm">برنامه سفر</p>
              </div>
              <div className="flex gap-1.5 lg:gap-x-2 items-center">
                <MedalStar
                  className="w-3.5 h-3.5 lg:w-6 lg:h-6"
                  variant="Bold"
                />
                <p className="text-sm">تضمین کیفیت</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-5 lg:mt-0">
              <div className="flex gap-x-8 flex-wrap items-center mt-2">
                <h4 className="text-sm font-medium ">امکانات : </h4>
                <ul className="flex gap-x-8 flex-wrap pr-4 lg:pr-0 text-xs list-disc">
                  {options.map((item, index) => (
                    <li className="text-gray-600" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:flex items-center gap-x-2 pl-2 mt-5 sm:mt-0 text-xs sm:text-sm font-vazirmatn-fd">
                <h4>ظرفیت باقی مانده : </h4>
                {availableSeats === 0 ? (
                  <span className="text-rose-800">ظرفیت تکمیل شده است!</span>
                ) : (
                  <span>{availableSeats} نفر</span>
                )}
              </div>
            </div>
          </div>
          <div className="row-start-4 lg:row-start-2 lg:col-start-2 mt-3 lg:mt-0">
            <div className="flex lg:hidden items-center gap-x-2 pl-2 mb-5 sm:mt-0 text-xs sm:text-sm font-vazirmatn-fd">
              <h4>ظرفیت باقی مانده : </h4>
              {availableSeats === 0 ? (
                <span className="text-rose-800">ظرفیت تکمیل شده است!</span>
              ) : (
                <span>{availableSeats} نفر</span>
              )}
            </div>
            <div className="flex flex-row-reverse lg:flex-row justify-between items-center font-vazirmatn-fd ">
              <div className="">
                <span className="text-complementry text-2xl lg:text-[28px] font-medium">
                  {price.toLocaleString()}
                </span>
                <span className="text-[10px] lg:text-sm text-dark-600 pr-1">
                  تومان
                </span>
              </div>
              <button
                disabled={isPending || availableSeats === 0}
                onClick={reserveHandler}
                className="bg-primary text-xl lg:text-2xl text-white rounded-[10px] py-1 px-3 lg:py-2 lg:px-10 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                رزرو و خرید
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 mt-4 grid grid-cols-[90px_repeat(5,minmax(130px,1fr))] lg:grid-cols-6 overflow-x-scroll scroll-hidden overflow-y-hidden">
            <div className="lg:border-l border-dark-200 text-center font-vazirmatn-fd">
              <div className="flex items-center justify-center gap-x-2 text-gray-600 mb-4">
                <Routing2 className="w-4 h-4 lg:w-5 lg:h-5" variant="Bold" />
                <span className="text-base lg:text-lg">مبدا</span>
              </div>
              <p className="text-sm lg:text-base font-medium text-black">
                {cityTranslations[origin.name]}
              </p>
            </div>
            <div className="lg:border-l border-dark-200 text-center font-vazirmatn-fd">
              <div className="flex items-center justify-center gap-x-2 text-gray-600 mb-4">
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5" variant="Bold" />
                <span className="text-base lg:text-lg">تاریخ رفت</span>
              </div>
              <p className="text-sm lg:text-base font-medium text-black">
                {moment(startDate).locale("fa").format("DD MMMM YYYY")}
              </p>
            </div>
            <div className="lg:border-l border-dark-200 text-center font-vazirmatn-fd">
              <div className="flex items-center justify-center gap-x-2 text-gray-600 mb-4">
                <Calendar2 className="w-4 h-4 lg:w-5 lg:h-5" variant="Bold" />
                <span className="text-base lg:text-lg">تاریخ برگشت</span>
              </div>
              <p className="text-sm lg:text-base font-medium text-black">
                {moment(endDate).locale("fa").format("DD MMMM YYYY")}
              </p>
            </div>
            <div className="lg:border-l border-dark-200 text-center font-vazirmatn-fd">
              <div className="flex items-center justify-center gap-x-2 text-gray-600 mb-4">
                <Bus className="w-4 h-4 lg:w-5 lg:h-5" variant="Bold" />
                <span className="text-base lg:text-lg">حمل و نقل</span>
              </div>
              <p className="text-sm lg:text-base font-medium text-black">
                {fleetVehicles[fleetVehicle]}
              </p>
            </div>
            <div className="lg:border-l border-dark-200 text-center font-vazirmatn-fd">
              <div className="flex items-center justify-center gap-x-2 text-gray-600 mb-4">
                <Profile2User
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  variant="Bold"
                />
                <span className="text-base lg:text-lg">ظرفیت</span>
              </div>
              <p className="text-sm lg:text-base font-medium text-black">
                حداکثر {capacity} نفر
              </p>
            </div>
            <div className="text-center font-vazirmatn-fd">
              <div className="flex items-center justify-center gap-x-2 text-gray-600 mb-4">
                <Security className="w-4 h-4 lg:w-5 lg:h-5" variant="Bold" />
                <span className="text-base lg:text-lg">بیمه</span>
              </div>
              <p className="text-sm lg:text-base font-medium text-black">
                {insurance ? "دارد" : "ندارد"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
          <AuthForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </Modal>
      )}
    </div>
  );
}
export default TourDetailPage;
