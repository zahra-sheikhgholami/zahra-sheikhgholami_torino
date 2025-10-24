function SkeletonTourDetail() {
  return (
    <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
      <div className="container mx-auto bg-white rounded-[10px] md:border border-dark-200 py-6 md:px-5">
        <div className="grid grid-cols-1 auto-rows-auto lg:grid-cols-[400px_1fr] gap-y-8 lg:gap-6 mb-8 lg:mb-0">
          <div className=" lg:row-span-2 place-self-center animate-pulse">
            <div className="h-[265px] w-[400px] bg-gray-200 rounded-xl"></div>
          </div>
          <div className="flex flex-col justify-between animate-pulse">
            <div className="flex lg:flex-col items-center lg:items-start justify-between ">
              <div className="mt-3 h-7 w-44 bg-gray-200 rounded"></div>
              <div className="mt-3 h-6 w-50 bg-gray-200 rounded"></div>
            </div>
            <div className="flex flex-wrap gap-x-3 lg:gap-x-10 mt-5">
              <div className="mt-3 h-5 w-2/3 lg:w-2/4 bg-gray-200 rounded"></div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="mt-3 h-5 w-2/4 lg:w-2/5 bg-gray-200 rounded"></div>
              <div className="mt-3 h-5 w-1/4 lg:w-1/5 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="animate-pulse flex flex-row-reverse lg:flex-row justify-between items-center row-start-4 lg:row-start-2 lg:col-start-2 mt-3 lg:mt-0">
            <div className="mt-3 h-5 w-60 bg-gray-200 rounded"></div>
            <div className="mt-3 h-9 w-40 bg-gray-200 rounded"></div>
          </div>
          <div className="lg:col-span-2 mt-4 grid grid-cols-[repeat(6,minmax(130px,1fr))] lg:grid-cols-6 overflow-x-scroll scroll-hidden overflow-y-hidden">
            <div className="lg:border-l border-dark-200">
              <div className="animate-pulse flex flex-col items-center">
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="lg:border-l border-dark-200">
              <div className="animate-pulse flex flex-col items-center">
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="lg:border-l border-dark-200">
              <div className="animate-pulse flex flex-col items-center">
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="lg:border-l border-dark-200">
              <div className="animate-pulse flex flex-col items-center">
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="lg:border-l border-dark-200">
              <div className="animate-pulse flex flex-col items-center">
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div>
              <div className="animate-pulse flex flex-col items-center">
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
                <div className="mt-3 h-5 w-30 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkeletonTourDetail;
