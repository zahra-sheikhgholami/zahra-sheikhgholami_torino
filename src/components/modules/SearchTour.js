"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { toast } from "react-toastify";
import { Calendar, GlobalSearch, Location } from "iconsax-reactjs";

import {
  convertSelectedDateToGregorian,
  extractCities,
  searchDateFormat,
} from "@/src/core/utils/tour";
import SearchTourCities from "./SearchTourCities";
import { getTours } from "@/src/core/services/tour";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

function SearchTour() {
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState(null);
  const [citiesList, setCitiesList] = useState({
    origins: [],
    destinations: [],
    allCities: [],
  });

  const router = useRouter();
  const queryParams = useSearchParams();

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    const startDate = queryParams.get("startDate");
    const endDate = queryParams.get("endDate");

    if (startDate && endDate) {
      const start = new DateObject({
        date: searchDateFormat(startDate),
        calendar: persian,
        locale: persian_fa,
      });
      const end = new DateObject({
        date: searchDateFormat(endDate),
        calendar: persian,
        locale: persian_fa,
      });
      if (
        !selectedDate ||
        !selectedDate.startDate.toString() !== !start.toString()
      ) {
        setDate([start, end]);
        setSelectedDate({ startDate: start, endDate: end });
      }
    } else {
      setDate(null);
      setSelectedDate(null);
    }
  }, [queryParams]);

  const fetchTours = async () => {
    const data = await getTours();
    const extractList = extractCities(data);
    setCitiesList(extractList);
  };

  const datePickerHandler = (range) => {
    if (range) {
      setSelectedDate({ startDate: range[0], endDate: range[1] });
      setDate(range);
    } else {
      setSelectedDate(null);
      setDate(null);
    }
  };

  const searchHandler = () => {
    if (selectedDate && (!selectedDate.startDate || !selectedDate.endDate)) {
      toast.warning("لطفاً تاریخ شروع و پایان را انتخاب کنید");
      return;
    }
    if (!selectedDate && !selectedOrigin && !selectedDestination) {
      router.push(`/`);
      return;
    }
    const startDate = selectedDate
      ? convertSelectedDateToGregorian(selectedDate.startDate)
      : "";
    const endDate = selectedDate
      ? convertSelectedDateToGregorian(selectedDate.endDate)
      : "";
    const params = new URLSearchParams({
      originId: selectedOrigin ? selectedOrigin.id.toString() : "",
      destinationId: selectedDestination
        ? selectedDestination.id.toString()
        : "",
      startDate,
      endDate,
    });
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="container mx-auto mt-8 px-8 md:px-0 lg:px-0 lg:w-[880px]">
      <div
        className=" grid grid-cols-2 md:grid-cols-[1fr_1fr_230px_1fr] gap-2 border-0 md:border border-dark-100 
      md:py-2 md:px-2 md:rounded-[20px]"
      >
        <div
          className="relative flex items-center justify-center md:justify-start gap-x-1.5 border border-dark-100 p-2 md:pr-3 rounded-xl 
        md:border-0"
        >
          <Location className="w-[18px] h-[18px] md:w-5 md:h-5 text-dark-500 md:text-dark-800" />
          <SearchTourCities
            allCities={citiesList?.allCities}
            citiesTop={citiesList?.origins}
            setSelected={setSelectedOrigin}
            selected={selectedOrigin}
            data={{ name: "origin", title: "مبدا" }}
          />
        </div>
        <div
          className="relative flex items-center justify-center md:justify-start gap-x-1.5 border border-dark-100 p-2 md:pr-3 rounded-xl 
        md:border-0 md:border-r md:rounded-none"
        >
          <GlobalSearch className="w-[18px] h-[18px] md:w-5 md:h-5 text-dark-500 md:text-dark-800" />
          <SearchTourCities
            allCities={citiesList?.allCities}
            citiesTop={citiesList?.destinations}
            setSelected={setSelectedDestination}
            selected={selectedDestination}
            data={{ name: "destination", title: "مقصد" }}
          />
        </div>
        <div
          className="col-span-2 md:col-span-1 relative flex items-center justify-center md:justify-start gap-x-1.5 border border-dark-100 p-2 md:pr-3 rounded-xl 
        md:border-0 md:border-r md:rounded-none w-full"
        >
          <Calendar className="w-[18px] h-[18px] md:w-5 md:h-5 text-dark-500 md:text-dark-800" />
          <DatePicker
            className="text-sm lg:text-base green font-vazirmatn-fd right-0"
            inputClass={`placeholder:text-dark-500 md:placeholder:text-dark-800 text-dark-900 text-sm lg:text-base placeholder:text-base md:placeholder:text-xl border-0 outline-0 ${
              selectedDate || date ? "w-40 md:w-44" : "w-10"
            }`}
            value={date}
            onChange={datePickerHandler}
            calendar={persian}
            locale={persian_fa}
            weekDays={weekDays}
            hideYear={true}
            placeholder="تاریخ"
            range
          />
        </div>
        <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
          <button
            onClick={searchHandler}
            className="w-full bg-primary cursor-pointer rounded-2xl p-2 md:py-2.5  text-white text-xl lg:text-2xl"
          >
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchTour;
