"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { ArrowDown2 } from "iconsax-reactjs";

import TourCard from "./TourCard";
import useTours from "@/src/hooks/useTours";
import Loader from "./Loader";
import SkeletonToursList from "@/src/components/skeletons/SkeletonToursList";

function ToursList({ tours }) {
  const [tourLimit, setTourLimit] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const { data = null, isPending } = useTours(queryString, tours);

  useEffect(() => {
    const checkScreen = () => {
      const { width } = window.innerWidth;
      setIsMobile(width <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  const toursData = data;
  const visibleTours = isMobile && toursData ? toursData.slice(0, tourLimit) : toursData || [];

  if (isPending && !data) {
    return <>
    <SkeletonToursList />
    <Loader />
    </>
  }

  return (
    <section className="container mx-auto px-8 md:px-4 mt-10">
      <h2 className="text-xl md:text-2xl lg:text-[32px] text-black mb-4">
        همه تور ها
      </h2>
      {visibleTours.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-5">
          {visibleTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="bg-stone-50 p-10 rounded-2xl">
          <h4 className="text-dark-800 font-medium text-lg md:text-2xl">
            توری یافت نشد!
          </h4>
        </div>
      )}
      {data && toursData && tourLimit < toursData.length && (
        <div
          onClick={() => setTourLimit(data.length)}
          className="flex md:hidden items-center justify-center gap-x-2 text-dark-500 font-vazirmatn-fd p-2 mt-4"
        >
          <span className="text-[13px]">مشاهده بیشتر</span>
          <ArrowDown2 size="12" />
        </div>
      )}
    </section>
  );
}
export default ToursList;
