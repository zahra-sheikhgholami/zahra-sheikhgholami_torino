import { useState } from "react";

import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

import { Add, ArrowLeft } from "iconsax-reactjs";

function AuthForm({ setIsOpenModal }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otpToastId, setOtpToastId] = useState(0);

  return (
    <div className="p-2 ">
      <div className="flex justify-end text-dark-900">
        {step === 2 ? (
          <button className="p-2 cursor-pointer" onClick={() => setStep(1)}>
            <ArrowLeft size="24" />
          </button>
        ) : (
          <button className="p-2 cursor-pointer" onClick={() => setIsOpenModal(false)}>
            <Add size="24" className=" transform rotate-45" />
          </button>
        )}
      </div>
      <div className="text-center px-4 sm:px-6 lg:pt-3 pt-4 pb-6 h-full">
        <h2 className="font-semibold text-[22px] lg:text-[28px] text-dark-900">
          {step === 2 ? "کد تایید را وارد کنید." : "ورود به تورینو"}
        </h2>
        {step === 2 ? (
        <CheckOTPForm
              otpToastId={otpToastId}
              setOtpToastId={setOtpToastId}
              setIsOpenModal={setIsOpenModal}
              setStep={setStep}
              mobile={mobile}
            />
        ) : (
          <SendOTPForm
            setStep={setStep}
            setMobile={setMobile}
            otpToastId={otpToastId}
            setOtpToastId={setOtpToastId}
          />
        )}
      </div>
    </div>
  );
}
export default AuthForm;
