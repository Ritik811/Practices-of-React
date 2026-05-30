import { SearchFilter } from "../components/UI/SearchFilter";
import { CountryCard } from "../components/UI/CountryCard";
import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/getApi";

export const CountryPage = () => {
  const [country, setCountry] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);

  const searchCountry = country.filter((curCountry) => {
    let countryName = curCountry.name.common;
    return countryName.toLowerCase().includes(searchInput.toLowerCase());
  });

  // const searchCountry = (curCountry) => {
  //   let countryName = curCountry.name.common;
  //   if (searchInput) {
  //     return countryName.toLowerCase().includes(searchInput.toLowerCase());
  //   } else {
  //     return curCountry;
  //   }
  // };

  const filterRegion = (curCountry) => {
    if (filter === "All") return true;
    return curCountry.region === filter;
  };

  // const filterCountries = country.filter((curCountry) => {
  //   return searchCountry(curCountry) && filterRegion(curCountry);
  // });

  const filterCountries = searchCountry.filter((curCountry) => {
    return filterRegion(curCountry);
  });

  console.log(filterCountries);

  return (
    <section className="country-section">
      <SearchFilter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFilter={setFilter}
        country={country}
        setCountry={setCountry}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard curCountry={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
