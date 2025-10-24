"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation } from "swiper/modules";
import Image from "next/image";

import { ArrowLeft, ArrowRight } from "iconsax-reactjs";

function SwiperImages() {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef(null);
  const images = [
    "/images/img_1.webp",
    "/images/img_2.webp",
    "/images/img_3.webp",
    "/images/img_4.webp",
  ];

  const activeIndexHandler = (swiper) => {
    setActiveIndex(swiper.activeIndex + 1);
  };

  const prevHandler = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const nextHandler = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="torino-slider flex flex-col items-center justify-center pt-10 lg:pt-0 lg:-row-start-3 lg:-row-end-1 lg:col-start-2 lg:col-end-3">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-[200px] h-[220px] sm:w-[255px] sm:h-[284px] lg:w-[300px] lg:h-[364px] xl:w-[389px] xl:h-[479px]"
        speed={300}
        cardsEffect={{
          slideShadows: false,
          perSlideOffset: 15,
          perSlideRotate: 0,
          rotate: false,
        }}
        onSlideChange={(swiper) => activeIndexHandler(swiper)}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              width={778}
              height={958}
              alt={`slide-${index}`}
              priority
              className="w-full h-full rounded-[35px]"
            />
          </SwiperSlide>
        ))}
        <div className="flex justify-center items-center mt-6 gap-x-3 text-dark-600">
          <button
            onClick={prevHandler}
            className="swiper-button-prev cursor-pointer"
            aria-label="Previous slide"
          >
            <ArrowRight className="w-6 h-6 lg:w-9 lg:h-9" />
          </button>
          <p className=" text-gray-700 text-xl lg:text-2xl">
           {images.length} / {activeIndex}
          </p>
          <button
            onClick={nextHandler}
            className="swiper-button-next cursor-pointer"
            aria-label="Next slide"
          >
            <ArrowLeft className="w-6 h-6 lg:w-9 lg:h-9" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
export default SwiperImages;
