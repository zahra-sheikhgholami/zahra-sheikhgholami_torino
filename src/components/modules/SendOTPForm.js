import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { mobileSchema } from "@/src/core/schema/auth";
import { useAuthMutations } from "@/src/hooks/useAuthMutations";

function SendOTPForm({
  mobile,
  setMobile,
  setStep,
  otpToastId,
  setOtpToastId,
}) {
  const {
    register: registerMobile,
    handleSubmit: handleMobileSubmit,
    formState: { errors: mobileErrors },
  } = useForm({ resolver: yupResolver(mobileSchema) });

  const { sendOtpMutation } = useAuthMutations();

  const { mutate, isPending } = sendOtpMutation;

  const onMobileSubmit = (data) => {
    setMobile(data.mobile);
    mutate(data, {
      onSuccess: (data) => {
        setStep(2);
        otpToastId !== 0 && toast.dismiss(otpToastId);
        setOtpToastId(
          toast.info(
            <div>
              کد اعتبارسنجی شما :
              <span className="text-lg font-semibold">{data?.code}</span>
            </div>,
            {
              autoClose: 1000 * 2 * 60,
              pauseOnHover: true,
            }
          )
        );
      },
    });
  };
  return (
    <div className="mt-11 lg:mt-8">
      <label htmlFor="mobile">
        <p className="font-light text-black text-base mt-2 pb-3 text-right">
          شماره موبایل خود را وارد کنید
        </p>
      </label>
      <form
        onSubmit={handleMobileSubmit(onMobileSubmit)}
        className="flex flex-col gap-y-2 "
      >
        <input
          {...registerMobile("mobile")}
          value={mobile}
          id="mobile"
          name="mobile"
          autoComplete="mobile"
          className="w-full p-3 font-vazirmatn-fd border border-dark-200 rounded-md 
                placeholder:font-light placeholder:text-[15px] placeholder:text-black/50 outline-complementry"
          placeholder="4253***0912"
        />
        <span className="text-rose-700 text-xs pr-2 min-h-4 place-self-start">
          {mobileErrors.mobile?.message}
        </span>
        <button
          disabled={isPending}
          type="submit"
          className="w-full mt-5 h-[50px] text-lg font-medium text-white bg-primary rounded-md border border-dark-200 p-2 
          font-vazirmatn-fd cursor-pointer disabled:cursor-not-allowed disabled:opacity-75"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}
export default SendOTPForm;
