function SkeletonCheckout() {
  return (
    <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
      <div className="container mx-auto lg:min-h-50 bg-white py-15 flex flex-col justify-center items-center rounded-[10px] border border-dark-200">
        <div className="mt-2 h-15 w-15 bg-gray-200 rounded"></div>
        <div className="mt-5 h-6 w-40 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
export default SkeletonCheckout;
