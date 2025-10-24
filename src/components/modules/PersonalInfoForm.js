import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import BirthDatePicker from "./BirthDatePicker";
import { updateUserProfile } from "@/src/core/services/user";
import { convertSelectedDateToGregorian } from "@/src/core/utils/tour";
import Loader from "./Loader";

function PersonalInfoForm({ data, setShowEdit }) {
  const [birthDate, setBirthDate] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({defaultValues: {firstName: "", lastName: "", birthDate: "", gender: "", notionalCode: ""}});

  const queryClient = useQueryClient();

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

    const { mutate, isPending } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (responseData) => {
      toast.success(responseData.message);
      queryClient.setQueryData(["userProfile"], responseData.user);
      setShowEdit(false);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است");
      console.error(error);
    },
  });

  const onSubmit = async (data) => {
    const birth = birth ? convertSelectedDateToGregorian(birthDate) : "";
    mutate({ ...data, birthDate: birth })
    
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-x-7 text-sm px-4">
        <div className="flex flex-col">
          <input
            {...register("firstName")}
            type="text"
            placeholder="نام"
            className="border border-dark-500 w-full p-2 
               rounded-[5px] placeholder:text-dark-500 text-dark-900 outline-complementry"
          />
          <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
            {errors.firstName?.message}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            {...register("lastName")}
            type="text"
            placeholder="نام خانوادگی"
            className="border border-dark-500 w-full p-2 
               rounded-[5px] placeholder:text-dark-500 text-dark-900 outline-complementry"
          />
          <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
            {errors.lastName?.message}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            {...register("notionalCode")}
            type="text"
            placeholder="کد ملی"
            className="border border-dark-500 w-full p-2 
               rounded-[5px] placeholder:text-dark-500 text-dark-900 outline-complementry"
          />
          <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
            {errors.notionalCode?.message}
          </span>
        </div>
        <div className="flex flex-col relative">
          <BirthDatePicker
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            date={data.birthDate}
          />
          <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
            {errors.birthDate?.message}
          </span>
        </div>
        <div className="flex flex-col">
          <div className="border border-dark-500 rounded-[5px] pl-2">
            <select
              {...register("gender")}
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
      <div className="flex justify-end gap-x-4 px-4 pt-4 border-t border-dark-200">
        <button
        disabled={isPending}
          type="submit"
          className="w-1/2 md:w-36 bg-primary border-2 border-primary rounded-[5px] cursor-pointer text-white font-semibold py-2
           disabled:opacity-75 disabled:cursor-not-allowed hover:bg-primary/85"
        >
          تایید
        </button>
        <button
          type="button"
          disabled={isPending}
          onClick={() => setShowEdit(false)}
          className="w-1/2 md:w-36 border-2 border-primary rounded-[5px] cursor-pointer text-primary font-semibold py-2
          disabled:opacity-75 disabled:cursor-not-allowed hover:bg-primary/10"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}
export default PersonalInfoForm;
