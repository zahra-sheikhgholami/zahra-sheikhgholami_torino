import { useState } from "react";
import moment from "jalali-moment";
import { Edit2 } from "iconsax-reactjs";

import PersonalInfoForm from "./PersonalInfoForm";

function PersonalInfo(props) {
  const { firstName, lastName, notionalCode, birthDate, gender } = props;
  
  const [showEdit, setShowEdit] = useState(false);

  const birthDateMoment = birthDate
    ? moment(birthDate).locale("fa").format("YYYY/MM/DD")
    : "-";

  return (
    <div
      className={`border border-dark-200 rounded-[10px] p-4 lg:py-5 mb-5 ${
        showEdit && "px-0"
      }`}
    >
      <div className="flex justify-between items-center  mb-6">
        <h2 className={`text-black ${showEdit && "pr-4"}`}>اطلاعات شخصی</h2>
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
        <PersonalInfoForm data={props} setShowEdit={setShowEdit} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-7 text-sm">
          <div className=" grid grid-cols-2 lg:grid-cols-[120px_1fr]  gap-x-3 lg:gap-x-6">
            <span className="font-light text-black">نام و نام خانوادگی</span>
            <span className="text-dark-900 font-semibold">
              {firstName || lastName ? `${firstName} ${lastName}` : "-"}
            </span>
          </div>
          <div className=" grid grid-cols-2 lg:grid-cols-[90px_1fr]  gap-x-3">
            <span className="font-light text-black">کدملی</span>
            <span className="font-vazirmatn-fd text-dark-900 ">
              {notionalCode ? notionalCode : "-"}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-[120px_1fr]  gap-x-3 lg:gap-x-6">
            <span className="font-light text-black">جنسیت</span>
            <span className="text-dark-900 font-semibold">
              {gender === "female" && "زن"}
              {gender === "male" && "مرد"}
              {(gender === "" || !gender) && "-"}
            </span>
          </div>
          <div className=" grid grid-cols-2 lg:grid-cols-[90px_1fr]  gap-x-3">
            <span className="font-light text-black">تاریخ تولد</span>
            <span className="font-vazirmatn-fd text-dark-900">
              {birthDateMoment}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
export default PersonalInfo;
