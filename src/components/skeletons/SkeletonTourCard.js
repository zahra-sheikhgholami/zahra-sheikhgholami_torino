"use client";

function SkeletonTourCard() {
  return (
    <div className="border border-gray-200 rounded-lg animate-pulse bg-white">
      <div className="w-full h-[180px] bg-gray-200"></div>
      <div className="border-b border-gray-200 px-4 py-3">
        <div className="mt-3 h-4 w-2/4 bg-gray-200 rounded"></div>
        <div className="mt-2 h-4 w-2/3 bg-gray-200 rounded"></div>
      </div>
      <div className="flex justify-between items-center py-3 px-4">
        <div className="mt-2 h-6 w-[100px] bg-gray-200 rounded"></div>
        <div className="mt-2 h-4 w-[150px] bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default SkeletonTourCard;
