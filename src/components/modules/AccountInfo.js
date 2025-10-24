import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Edit2 } from "iconsax-reactjs";

import { updateUserProfile } from "@/src/core/services/user";
import Loader from "./Loader";

function AccountInfo({ user }) {
  const { mobile, email } = user;
  const [showEdit, setShowEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({defaultValues: {email: email || ""}});

  const queryClient = useQueryClient();

  useEffect(() => {
    if (user) reset({email: user.email || ""});
  }, [user?.email , reset]);

  const { mutate, isPending } = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (responseData) => {
      toast.success(responseData.message);
      queryClient.setQueryData(["userProfile"], responseData.user);
      setShowEdit(false)
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است");
      console.error("user profile error:", error);
    },
  });

  const onSubmit = async (data) => {
    if (data.email === email) {
      setShowEdit(false);
      return
    } else {
      mutate(data);
    }
  };

  if(!user) {
    return <Loader />
  }

  return (
    <div
      className={`border border-dark-200 rounded-[10px] p-4 ${
        showEdit && "pb-1"
      } mb-5`}
    >
      <h2 className="text-black mb-6">اطلاعات حساب کاربری</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-7 text-sm">
        <div className="col-span-2 lg:col-span-1 grid grid-cols-2 lg:grid-cols-[120px_1fr]  gap-x-3 lg:gap-x-6">
          <span className="font-light lg:w-28 xl:w-30 text-black">
            شماره موبایل
          </span>
          <span className="font-vazirmatn-fd text-dark-900">{mobile}</span>
        </div>
        {showEdit ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-between sm:justify-end items-start gap-x-3"
          >
            <div className="w-full sm:w-fit flex flex-col">
              <input
              dir="ltr"
                {...register("email")}
                name="email"
                className="w-full sm:w-60 border border-dark-500 rounded-[5px] text-xs placeholder:text-dark-500 p-2 outline-complementry"
                placeholder="آدرس ایمیل"
              />
              <span className="text-rose-700 text-xs pr-2 min-h-4 mt-1">
                {errors.email?.message}
              </span>
            </div>
            <button
              type="submit"
               disabled={isPending}
              className="bg-primary rounded-[5px] text-white font-semibold w-fit py-2 px-6 cursor-pointer
              disabled:opacity-75 disabled:cursor-not-allowed hover:bg-primary/85"
            >
              تایید
            </button>
            <button
              type="button"
              onClick={() => setShowEdit(false)}
              disabled={isPending}
               className="py-1.5 px-6 border-2 border-primary rounded-[5px] cursor-pointer text-primary 
               font-semibold disabled:opacity-75 disabled:cursor-not-allowed hover:bg-primary/10"
            >
              لغو 
            </button>
          </form>
        ) : (
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-2 lg:grid-cols-[90px_1fr] gap-x-6">
              <span className="font-light lg:[90px] text-black">ایمیل</span>
              <span className="text-dark-900">{email || "-"}</span>
            </div>
            <button
              onClick={() => setShowEdit(true)}
              className="text-complementry flex gap-x-2 cursor-pointer"
            >
              <Edit2 className="w-4 h-4" />
              <span className="">{email ? "ویرایش" : "افزودن"}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default AccountInfo;
