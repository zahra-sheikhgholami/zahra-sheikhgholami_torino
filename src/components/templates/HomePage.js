import Image from "next/image";
import SearchTour from "@/src/components/modules/SearchTour";
import ToursList from "@/src/components/modules/ToursList";
import CallToBook from "@/src/components/modules/CallToBook";
import WhyTorino from "@/src/components/modules/WhyTorino";
import Features from "@/src/components/modules/Features";


function HomePage({initialData}) {

  return (
    <div>
      <Image
        src="/images/banner.webp"
        width={4317}
        height={1050}
        alt="banner"
        priority
        className="w-screen min-h-30"
      />
      <h1 className="font-semibold md:text-xl lg:text-[28px] text-[#595959] text-center mt-8">
        <span className="text-primary pl-2">تورینو</span>
        برگزار کننده بهترین تور های داخلی و خارجی
      </h1>
      <SearchTour />
      <ToursList tours={initialData} />
      <CallToBook />
      <WhyTorino />
      <Features />
    </div>
  );
}
export default HomePage;
