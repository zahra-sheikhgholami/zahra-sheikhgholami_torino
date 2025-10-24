import { Airplane, Bus, Ship, SunFog } from "iconsax-reactjs";

import { cityTranslations, fleetVehicles } from "@/src/core/constants/tour";
import { dateFormat, tourStatus, tourStatusLabel } from "@/src/core/utils/tour";

function UserTourCard({ tour }) {
  const {
    id,
    title,
    price,
    startDate,
    endDate,
    origin,
    destination,
    fleetVehicle
  } = tour;

  const status = tourStatus(startDate, endDate);

  return (
    <div className="relative border border-dark-200 rounded-[10px]">
      <div className="py-6 lg:py-4 px-4 grid grid-cols-2 xl:grid-cols-3 gap-y-5">
        <div className="text-black flex items-center gap-x-2">
          <SunFog className="w-[18px] h-[18px] lg:w-6 lg:h-6" />
          <h2 className="text-xs lg:text-sm">{title}</h2>
        </div>
        <div className="text-black flex items-center gap-x-2">
          {fleetVehicle === "airplane" && (
            <Airplane className="w-[18px] h-[18px] lg:w-6 lg:h-6 transform -rotate-45" />
          )}
          {fleetVehicle === "ship" && (
            <Ship className="w-[18px] h-[18px] lg:w-6 lg:h-6" />
          )}
          {(fleetVehicle === "train" ||
            fleetVehicle === "bus" ||
            fleetVehicle === "SUV") && (
            <Bus className="w-[18px] h-[18px] lg:w-6 lg:h-6" />
          )}
          <h2 className="text-xs lg:text-sm">
            سفر با {fleetVehicles[fleetVehicle]}
          </h2>
        </div>
        <div className={`absolute xl:static left-1 top-1 place-self-end-safe text-[10px] lg:text-xs 
        w-fit h-fit rounded-3xl py-0.5 px-1.5 
        ${status === "finished" && "bg-primary-200 text-primary"} 
        ${status === "ongoing" && "bg-warning-200 text-warning"}
        ${status === "uncoming" && "bg-sky-200 text-sky-600"}
        `}
        >
          <span>{tourStatusLabel(status)}</span>
        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-between lg:justify-start items-center gap-x-3">
          <h3 className="text-black text-sm font-semibold flex items-center gap-x-2">
            {cityTranslations[origin.name]} به{" "}
            {cityTranslations[destination.name]}
          </h3>
          <span className="text-dark-500 text-xs lg:text-sm flex items-center gap-x-2 font-vazirmatn-fd">
            &bull; {dateFormat(startDate)}
          </span>
        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-between lg:justify-start items-center gap-x-3">
          <h3 className="text-black text-sm font-semibold flex items-center gap-x-2">
            تاریخ برگشت
          </h3>
          <span className="text-dark-500 text-xs lg:text-sm flex items-center gap-x-2 font-vazirmatn-fd">
            &bull; {dateFormat(endDate)}
          </span>
        </div>
      </div>
      <div className="py-2  border-t border-dark-200 grid grid-cols-2 lg:flex">
        <div className="px-4 py-2 border-l border-dark-200 place-self-center lg:place-self-start flex items-center flex-wrap gap-x-2">
          <span className="text-[10px] lg:text-sm text-dark-500">
            شماره تور
          </span>
          <span className="font-vazirmatn-fd text-xs lg:text-sm text-dark-900">
            {id}
          </span>
        </div>
        <div className="px-4 py-2 place-self-center lg:place-self-start flex items-center flex-wrap gap-x-2">
          <span className="text-[10px] lg:text-sm text-dark-500">
            مبلغ پرداخت شده
          </span>
          <span className="font-vazirmatn-fd text-xs lg:text-sm text-dark-900">
            {price.toLocaleString()}{" "}
            <span className="text-[8px] lg:text-[10px] font-light text-dark-500">
              تومان
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default UserTourCard;
