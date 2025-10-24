"use client";

import { useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";

import { searchDateFormat } from "@/src/core/utils/tour";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

function BirthDatePicker({ birthDate, setBirthDate, date = "" }) {
  useEffect(() => {
    if (date) {
      const birth = new DateObject({
        date: searchDateFormat(date),
        calendar: persian,
        locale: persian_fa,
      });
      setBirthDate(birth);
    } else {
      setBirthDate(null);
    }
  }, [date, setBirthDate]);

  return (
    <DatePicker
      value={birthDate}
      onChange={setBirthDate}
      calendar={persian}
      locale={persian_fa}
      weekDays={weekDays}
      monthYearSeparator="|"
      name="birthDate"
      placeholder="تاریخ تولد"
      className="text-sm lg:text-base green font-vazirmatn-fd"
      inputClass="border border-dark-500 w-full p-2 rounded-[5px] placeholder:text-dark-500 text-dark-900 outline-complementry"
    />
  );
}
export default BirthDatePicker;
