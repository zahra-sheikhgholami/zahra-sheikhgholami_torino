import { useEffect, useRef, useState } from "react";
import OtpInput from "react18-input-otp";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { otpSchema } from "@/src/core/schema/auth";
import { formatTime } from "@/src/core/utils/auth";
import { useAuthMutations } from "@/src/hooks/useAuthMutations";

function CheckOTPForm({ mobile, otpToastId, setOtpToastId, setIsOpenModal }) {
  const [timeRemaining, setTimeRemaining] = useState(120);
  const intervalRef = useRef(null);

  const {
    handleSubmit: handleOtpSubmit,
    control,
    formState: { errors: otpErrors },
  } = useForm({ resolver: yupResolver(otpSchema), defaultValues: { otp: "" } });

  const { sendOtpMutation, checkOtpMutation } = useAuthMutations();
  const { mutate, isPending } = checkOtpMutation;
  const { mutate: resentOtpMutate, isPending: isPendingResend } =
    sendOtpMutation;

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    setTimeRemaining(120);

    intervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const resendOtp = () => {
    startTimer();
    resentOtpMutate(
      { mobile },
      {
        onSuccess: (data) => {
          otpToastId !== 0 && toast.dismiss(otpToastId);
          setOtpToastId(
            toast.info(`کد اعتبارسنجی شما : ${data?.code}`, {
              autoClose: 1000 * 2 * 60,
              pauseOnHover: true,
            })
          );
        },
      }
    );
  };

  const onOtpSubmit = (data) => {
    mutate(
      { mobile, code: data.otp },
      {
        onSuccess: () => {
          setIsOpenModal(false);
          toast.dismiss(otpToastId);
        },
      }
    );
  };

  return (
    <div className="mt-9 lg:mt-5">
      <p className="text-sm text-dark-900 pb-2 lg:pb-4 text-center">
        کد تایید به شماره
        <span className="font-vazirmatn-fd px-1">{mobile}</span>
        ارسال شد
      </p>
      <form
        onSubmit={handleOtpSubmit(onOtpSubmit)}
        className="w-full flex flex-col gap-y-2"
      >
        <div id="otp-inputs">
          <Controller
            name="otp"
            control={control}
            rules={{ required: "کد تایید الزامی است" }}
            render={({ field }) => (
              <OtpInput
                value={field.value}
                numInputs={6}
                onChange={field.onChange}
                isInputNum
                shouldAutoFocus
                inputStyle="text-center p-3 font-vazirmatn-fd border border-dark-200 rounded-md outline-complementry"
                containerStyle="flex justify-between lg:justify-center lg:gap-x-3 text-center"
              />
            )}
          />
        </div>
        <span className="text-rose-700 text-xs pr-2 min-h-4 place-self-start">
          {otpErrors.otp?.message}
        </span>
        <div className="flex justify-center font-light text-xs text-dark-900">
          {timeRemaining === 0 ? (
            <p
              onClick={resendOtp}
              className={`text-secondary font-medium border-b border-white hover:border-secondary cursor-pointer
                ${
                  isPendingResend
                    ? " disabled:opacity-85 disabled:cursor-not-allowed"
                    : ""
                }`}
            >
              درخواست مجدد کد
            </p>
          ) : (
            <>
              <span dir="ltr" className="font-vazirmatn-fd pl-1">
                {formatTime(timeRemaining)}
              </span>
              <p>تا ارسال مجدد کد</p>
            </>
          )}
        </div>
        <button
          disabled={isPending}
          type="submit"
          className="w-full h-[50px] mt-5 lg:mt-2 text-lg font-medium text-white bg-primary rounded-md border border-dark-200 p-2 
          font-vazirmatn-fd cursor-pointer disabled:cursor-not-allowed disabled:opacity-75"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}
export default CheckOTPForm;
