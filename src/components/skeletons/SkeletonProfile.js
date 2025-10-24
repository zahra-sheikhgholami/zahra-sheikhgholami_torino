function SkeletonProfile() {
  return (
    <div>
      <div className="border border-dark-200 rounded-[10px] p-4">
        <div className="mt-2 h-5 w-40 bg-gray-200 rounded"></div>
        <div className="flex flex-wrap justify-between mt-5">
          <div className="mt-2 h-5 w-full sm:w-40 mb-5 sm:mb-0 bg-gray-200 rounded"></div>
          <div className="mt-2 h-5 w-1/3 sm:w-40 bg-gray-200 rounded"></div>
          <div className="mt-2 h-5 w-1/3 sm:w-40 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="border border-dark-200 rounded-[10px] p-4 mt-5">
        <div className="flex justify-between">
        <div className="mt-2 h-5 w-40 bg-gray-200 rounded"></div>
        <div className="mt-2 h-5 w-30 bg-gray-200 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
          <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
          <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
          <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="border border-dark-200 rounded-[10px] p-4 mt-5">
        <div className="flex justify-between">
        <div className="mt-2 h-5 w-40 bg-gray-200 rounded"></div>
        <div className="mt-2 h-5 w-30 bg-gray-200 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
          <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
          <div className="mt-2 h-5 w-full md:w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
export default SkeletonProfile;
