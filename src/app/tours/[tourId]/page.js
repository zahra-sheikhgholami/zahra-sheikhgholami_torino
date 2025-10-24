import Loader from "@/src/components/modules/Loader";
import SkeletonTourDetail from "@/src/components/skeletons/SkeletonTourDetail";
import TourDetailPage from "@/src/components/templates/TourDetailPage";

export async function generateMetadata({ params }) {
  const { tourId } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tour/${tourId}`
    );
    if (!res.ok) {
      return { title: "تور موردنظر یافت نشد | تورینو" };
    }
    const tour = await res.json();
    return {
      title: `${tour.title || "تور موردنظر یافت نشد"} | تورینو`,
    };
  } catch (error) {
    return { title: "تور موردنظر یافت نشد | تورینو" };
  }
}

async function TourDetails({ params }) {
  const { tourId } = await params;
  let data = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tour/${tourId}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
    return (
      <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
        <div className="container mx-auto bg-white rounded-[10px] md:border border-dark-200 py-10 md:px-5 text-center">
          <p className="font-medium text-dark-800 lg:text-xl">تور موردنظر یافت نشد</p>
        </div>
      </div>
    );
  }
    data = await res.json();
  } catch (error) {
    return (
       <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
        <div className="container mx-auto bg-white rounded-[10px] md:border border-dark-200 py-10 md:px-5 text-center">
          <p className="font-medium text-dark-800 lg:text-xl">
            مشکلی در دریافت اطلاعات رخ داده است
          </p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <>
        <SkeletonTourDetail />
        <Loader />
      </>
    );
  }

  if (data?.message) {
    return (
      <div className="md:bg-gray-100 p-8 min-h-[calc(100vh-360px)]">
        <div className="container mx-auto bg-white rounded-[10px] md:border border-dark-200 py-10 md:px-5 text-center">
          <p className="font-medium text-dark-800 lg:text-xl">{data.message}</p>
        </div>
      </div>
    );
  }

  return <TourDetailPage tour={data} />;
}
export default TourDetails;
