import SkeletonTourCard from "./SkeletonTourCard"

function SkeletonToursList() {
  return (
    <div className="container mx-auto px-8 md:px-4 mt-10">
      <h2 className="text-xl md:text-2xl lg:text-[32px] text-black mb-4">
        همه تور ها
      </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 md:gap-5">
          <SkeletonTourCard />
          <SkeletonTourCard />
          <SkeletonTourCard />
          <SkeletonTourCard />
        </div>
      </div>
  )
}
export default SkeletonToursList