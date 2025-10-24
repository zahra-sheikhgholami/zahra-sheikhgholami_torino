import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { findCity } from "@/src/core/utils/tour";

import { Location } from "iconsax-reactjs";

function SearchTourCities({ data, citiesTop, allCities, setSelected, selected }) {
  const { name, title } = data;
  const queryParams = useSearchParams();

  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isShowCitiesTop, setIsShowCitiesTop] = useState(true);
  const [cities, setCities] = useState(null);

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (!e.target.closest(`#${name}-cities-wrapper`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", clickOutsideHandler);
    return () => document.removeEventListener("click", clickOutsideHandler);
  }, [name]);

  useEffect(() => {
    setCities([...citiesTop]);
  }, [citiesTop]);

  useEffect(() => {
    const originId = queryParams.get("originId");
    const destinationId = queryParams.get("destinationId");
    if (originId) {
      const origin = findCity(originId, allCities);
      if (origin && name === "origin") {
        setSelected(origin);
        setSearchInput(origin.persianName);
      }
    }
    if (destinationId) {
      const destination = findCity(destinationId, allCities);
      if (destination && name === "destination") {
        setSelected(destination);
        setSearchInput(destination.persianName);
      }
    }
  }, [allCities, queryParams, name]);

  const searchInputHandler = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    if (!inputValue) {
      setCities([...citiesTop]);
      setIsShowCitiesTop(true);
      setSelected("");
      setIsOpen(false);
    } else {
      const citiesFilter = allCities.filter((city) =>
        city.persianName.includes(inputValue)
      );
      setCities(citiesFilter);
      setIsShowCitiesTop(false);
    }
  };
  const clickHandler = (city) => {
    setIsOpen(false);
    setSearchInput(city.persianName);
    setSelected(city);
  };

  return (
    <div id={`${name}-cities-wrapper`}>
      <input
        className={`placeholder:text-dark-500 md:placeholder:text-dark-800 text-dark-900 md:text-xl outline-0 transition-all duration-200 ease-in-out ${
          searchInput ? "w-full" : "w-10 md:w-full"
        }`}
        value={searchInput || ""}
        onChange={searchInputHandler}
        name={name}
        placeholder={title}
        onClick={() => setIsOpen(!isOpen)}
        autoComplete="off"
      />
      {isOpen && (
        <div className="absolute top-11 md:top-16 right-0 left-0 max-h-60 z-50 overflow-y-scroll border border-dark-200 bg-white rounded-lg overflow-hidden">
          {isShowCitiesTop && (
            <div className="bg-stone-100 py-1.5 px-2 font-vazirmatn-fd text-[13px] font-light text-dark-800">
              پر تردد
            </div>
          )}
          {cities.length ? (
            <div className="" role="listbox">
              {cities.map((city) => (
                <div
                  role="option"
                  aria-selected={selected?.id === city.id}
                  onClick={() => clickHandler(city)}
                  key={city.id}
                  className="py-3 px-2 flex gap-x-2 text-sm text-dark-900 border-b border-dark-200 last:border-b-0 cursor-pointer hover:bg-gray-50"
                >
                  <Location className="w-5 h-5" />
                  {city.persianName}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-3 px-2 flex gap-x-2 text-sm text-dark-900">
              موردی یافت نشد!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default SearchTourCities;
