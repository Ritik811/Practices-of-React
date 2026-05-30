import { SearchFilter } from "../components/UI/SearchFilter";
import { CountryCard } from "../components/UI/CountryCard";
import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/getApi";

export const CountryPage = () => {
  const [country, setCountry] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);

  const searchFilter = country.filter((curCountry) => {
    let countryName = curCountry.name.common;
    return countryName.toLowerCase().includes(searchInput.toLowerCase());
  });

  console.log(searchFilter);

  return (
    <section className="country-section">
      <SearchFilter searchInput={searchInput} setSearchInput={setSearchInput} />

      <ul className="grid grid-four-cols">
        {searchFilter.map((curCountry, index) => {
          return <CountryCard curCountry={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
