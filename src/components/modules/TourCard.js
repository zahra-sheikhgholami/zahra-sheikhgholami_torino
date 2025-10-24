import Image from "next/image";
import Link from "next/link";
import moment from "jalali-moment";

import { getTourDays } from "@/src/core/utils/tour";
import { fleetVehicles } from "@/src/core/constants/tour";

function TourCard({ tour }) {
  const { id, title, price, image, startDate, endDate, fleetVehicle, options } =
    tour;

  const tourMonth = startDate ? moment(startDate).locale("fa").format("MMMM") : "-";
  const tourDays = (startDate, endDate) ? getTourDays(startDate, endDate) : "-";

  return (
    <div className="border border-dark-100 shadow-[0_0_2px_0_rgba(0,0,0,0.25)] rounded-[10px]">
      <Image
        src={image}
        width={279}
        height={159}
        alt={title}
        priority
        className="w-full h-40"
      />
      <div className="p-2.5 pt-3.5 border-b border-dark-100">
        <h2 className="text-[22px] text-black">{title}</h2>
        <p className="text-[15px] text-dark-600 truncate">
          {tourMonth} ماه . {tourDays} روزه - {fleetVehicle ? fleetVehicles[fleetVehicle] : ""}
          {options?.length > 0 && options.map((option, index) => (
            <span key={index}> - {option}</span>
          ))}
        </p>
      </div>
      <div className="flex p-2.5 justify-between items-center">
        <Link
          href={`/tours/${id}`}
          className="bg-primary w-25 text-center py-1 text-[15px] text-white rounded-sm"
        >
          رزرو
        </Link>
        <div className="font-vazirmatn-fd">
          <span className="text-complementry">{price.toLocaleString()}</span>
          <span className="text-xs text-dark-600 pr-1">تومان</span>
        </div>
      </div>
    </div>
  );
}
export default TourCard;
