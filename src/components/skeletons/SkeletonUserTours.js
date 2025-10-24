function SkeletonUserTours() {
  return (
    <div className="md:border border-dark-200 rounded-[10px] py-4 px-6 flex flex-col gap-y-6">
      <div className="relative border border-dark-200 rounded-[10px]">
        <div className="py-6 lg:py-4 px-4 grid grid-cols-2 gap-5">
            <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
            <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
            <div className="mt-2 h-5 w-full md:w-2/3 col-span-2 md:col-span-1 bg-gray-200 rounded"></div>
            <div className="mt-2 h-5 w-full md:w-2/3 col-span-2 md:col-span-1 bg-gray-200 rounded"></div>
        </div>
        <div className="py-2 border-t border-dark-200 grid grid-cols-2 pr-4">
            <div className="mt-2 h-5 w-2/3 bg-gray-200 rounded"></div>
            <div className="mt-2 h-5 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="relative border border-dark-200 rounded-[10px]">
        <div className="py-6 lg:py-4 px-4 grid grid-cols-2 gap-5">
            <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
            <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
            <div className="mt-2 h-5 w-full md:w-2/3 col-span-2 md:col-span-1 bg-gray-200 rounded"></div>
            <div className="mt-2 h-5 w-full md:w-2/3 col-span-2 md:col-span-1 bg-gray-200 rounded"></div>
        </div>
        <div className="py-2 border-t border-dark-200 grid grid-cols-2 pr-4">
            <div className="mt-2 h-5 w-2/3 bg-gray-200 rounded"></div>
            <div className="mt-2 h-5 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
export default SkeletonUserTours;
