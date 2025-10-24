import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { updateUserProfile } from "@/src/core/services/user";
import Loader from "./Loader";

function BankInfoForm({ data, setShowEdit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      debitCard_code: "",
      shaba_code: "",
      accountIdentifier: "",
    },
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  const { mutate, isPending } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (responseData) => {
      toast.success(responseData.message || "اطلاعات با موفقیت ذخیره شد");
      queryClient.setQueryData(["userProfile"], responseData.user);
      setShowEdit(false);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است");
      console.error(error);
    },
  });

  const onSubmit = (data) => {
    mutate({ payment: data });
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-x-7 text-sm px-4">
        <div className="flex flex-col">
          <input
            {...register("debitCard_code")}
            type="text"
            placeholder="شماره کارت"
            className="border border-dark-500 w-full p-2 
               rounded-[5px] placeholder:text-dark-500 text-dark-900 outline-complementry"
          />
          <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
            {errors.debitCard_code?.message}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            {...register("shaba_code")}
            type="text"
            placeholder="شماره شبا"
            className="border border-dark-500 w-full p-2 
               rounded-[5px] placeholder:text-dark-500 text-dark-900 outline-complementry"
          />
          <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
            {errors.shaba_code?.message}
          </span>
        </div>
        <div className="flex flex-col">
          <input
            {...register("accountIdentifier")}
            type="text"
            placeholder="شماره حساب"
            className="border border-dark-500 w-full p-2 
               rounded-[5px] placeholder:text-dark-500 text-dark-900 outline-complementry"
          />
          <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
            {errors.accountIdentifier?.message}
          </span>
        </div>
      </div>
      <div className="flex justify-end gap-x-4 px-4 pt-4 border-t border-dark-200">
        <button
          type="submit"
          disabled={isPending}
          className="w-1/2 md:w-36 bg-primary border-2 border-primary rounded-[5px] cursor-pointer text-white font-semibold py-2
        disabled:opacity-75 disabled:cursor-not-allowed"
        >
          تایید
        </button>
        <button
          type="button"
          onClick={() => setShowEdit(false)}
          className="w-1/2 md:w-36 border-2 border-primary rounded-[5px] cursor-pointer text-primary font-semibold py-2"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}
export default BankInfoForm;
