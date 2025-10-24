"use client";

import { useQuery } from "@tanstack/react-query";

import { getUserTours } from "@/src/core/services/user";
import UserTourCard from "@/src/components/modules/UserTourCard";
import Loader from "@/src/components/modules/Loader";
import SkeletonUserTours from "@/src/components/skeletons/SkeletonUserTours";

function UserToursPage() {
  const { data: tours = null, isPending } = useQuery({
    queryKey: ["userTours"],
    queryFn: getUserTours,
  });

  if (isPending && !tours) {
    return (
      <>
        <SkeletonUserTours />
        <Loader />
      </>
    );
  }

  return (
    <div className="md:border border-dark-200 rounded-[10px] py-4 px-6">
      {tours && tours.length ? (
        <div className=" flex flex-col gap-y-6">
          {tours.map((tour, index) => (
            <UserTourCard key={index} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-dark-800 text-lg lg:text-xl font-medium">
            توری ثبت نام نکرده اید.
          </p>
        </div>
      )}
    </div>
  );
}
export default UserToursPage;
