import moment from "jalali-moment";
import { cityTranslations } from "@/src/core/constants/tour";

// return the number of days between startDate and endDate
const getTourDays = (startDate, endDate) => {
  const start = moment(startDate);
  const end = moment(endDate);

  const diffTime = end - start;
  const diffDay = Math.ceil(diffTime / (24 * 60 * 60 * 1000)) + 1;

  return diffDay;
};

// format a date to persian full date string e.g. "شنبه 01 شهریور 1404"
const dateFormat = (date) => {
  const format = moment(date).locale("fa").format("dddd DD MMMM YYYY");
  return format;
};

// format a date for search input in "YYYY/MM/DD"
const searchDateFormat = (date) => {
  const dateFormat = moment(date).locale("fa").format("YYYY/MM/DD");
  return dateFormat;
};

// determines tour status:  "uncoming", "ongoing", or "finished"
const tourStatus = (startDate, endDate) => {
  const today = moment();
  const start = moment(startDate);
  const end = moment(endDate);

  if (today.isBefore(start)) return "uncoming";
  if (today.isAfter(end)) return "finished";
  return "ongoing";
};

// returns Persian label for tour status
const tourStatusLabel = (status) => {
  switch (status) {
    case "uncoming":
      return "شروع نشده";
    case "ongoing":
      return "در حال برگزاری";
    case "finished":
      return "به اتمام رسیده";
    default:
      return "";
  }
};

// return unique cities with Persian names added
const getUniqueCitiesWithPersianNames = (array) => {
  const uniqueCities = array.filter(
    (city, index, allCities) =>
      index === allCities.findIndex((item) => item.id === city.id)
  );
  const citiesWithPersianNames = uniqueCities.map((city) => {
    return { ...city, persianName: cityTranslations[city.name] };
  });
  return citiesWithPersianNames;
};

// extracts origins, destinations, and all cities from tours
const extractCities = (tours) => {
  if (!tours.length) return {};
  const origins = tours.map((tour) => tour.origin);
  const uniqueOrigins = getUniqueCitiesWithPersianNames(origins);

  const destinations = tours.map((tour) => tour.destination);
  const uniqueDestinations = getUniqueCitiesWithPersianNames(destinations);

  const allCities = [...uniqueOrigins, ...uniqueDestinations];
  const uniqueCities = getUniqueCitiesWithPersianNames(allCities);

  return {
    origins: uniqueOrigins,
    destinations: uniqueDestinations,
    allCities: uniqueCities,
  };
};

//convert Jalali date to Gregorian string "YYYY/MM/DD"
const jalaliToGregorian = (year, month, day) => {
  const jalaliDate = `${year}/${month}/${day}`;
  const gregorianDate = moment
    .from(jalaliDate, "fa", "YYYY/MM/DD")
    .format("YYYY-MM-DD");
  return gregorianDate;
};

// convert selected date object to Gregorian
const convertSelectedDateToGregorian = (date) => {
  if (!date) return "";
  const { year, month, day } = date;
  return jalaliToGregorian(year, month.number, day);
};

// find a city by ID in a list of cities
const findCity = (id, cities) => cities.find((city) => city.id === id) || null;


export {
  getTourDays,
  dateFormat,
  searchDateFormat,
  tourStatus,
  tourStatusLabel,
  getUniqueCitiesWithPersianNames,
  extractCities,
  convertSelectedDateToGregorian,
  findCity,
};
