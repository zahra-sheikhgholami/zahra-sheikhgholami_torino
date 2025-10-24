import { Edit2 } from "iconsax-reactjs";
import { useState } from "react";
import BankInfoForm from "./BankInfoForm";

function BankInfo({ payment }) {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div
      className={`border border-dark-200 rounded-[10px] p-4 lg:py-5 mb-5 ${
        showEdit && "px-0"
      }`}
    >
      <div>
        <div className="flex justify-between items-center  mb-6">
          <h2 className={`text-black ${showEdit && "pr-4"}`}>
            اطلاعات حساب بانکی
          </h2>
          {!showEdit && (
            <button
              onClick={() => setShowEdit(true)}
              className="text-complementry flex gap-x-2 text-sm cursor-pointer"
            >
              <Edit2 className="w-4 h-4" />
              <span className="">ویرایش اطلاعات</span>
            </button>
          )}
        </div>
        {showEdit ? (
          <BankInfoForm data={payment} setShowEdit={setShowEdit} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-7 text-sm">
            <div className=" grid grid-cols-2 lg:grid-cols-[120px_1fr]  gap-x-3 lg:gap-x-6">
              <span className="font-light text-black">شماره کارت</span>
              <span className="text-dark-900 font-vazirmatn-fd">
                {payment?.debitCard_code ? payment?.debitCard_code : "-"}
              </span>
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-[90px_1fr]  gap-x-3">
              <span className="font-light text-black">شماره شبا</span>
              <span className="font-vazirmatn-fd text-dark-900 ">
                {payment?.shaba_code ? payment?.shaba_code : "-"}
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-[120px_1fr]  gap-x-3 lg:gap-x-6">
              <span className="font-light text-black">شماره حساب</span>
              <span className="text-dark-900 font-vazirmatn-fd">
                {payment?.accountIdentifier ? payment?.accountIdentifier : "-"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default BankInfo;
