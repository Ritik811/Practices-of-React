import { SearchFilter } from "../components/UI/SearchFilter";
import { CountryCard } from "../components/UI/CountryCard";
import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/getApi";

export const CountryPage = () => {
  const [country, setCountry] = useState([]);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);

  return (
    <section className="country-section">
      <SearchFilter />

      <ul className="grid grid-four-cols">
        {country.map((curCountry, index) => {
          return <CountryCard curCountry={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
