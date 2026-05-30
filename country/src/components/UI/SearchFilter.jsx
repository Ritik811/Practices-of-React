export const SearchFilter = ({
  setSearchInput,
  setFilter,
  country,
  setCountry,
}) => {
  const handleAscDes = (evt) => {
    console.log("Hello", evt.target.innerHTML);
    let value = evt.target.innerHTML;
    const sortCountry = [...country].sort((a, b) => {
      return value == "ASC"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountry(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        onChange={(evt) => setSearchInput(evt.target.value)}
      />

      <div>
        <button onClick={handleAscDes}>ASC</button>
      </div>

      <div>
        <button onClick={handleAscDes}>DES</button>
      </div>

      <div>
        <select
          className="select-section"
          onChange={(evt) => setFilter(evt.target.value)}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
