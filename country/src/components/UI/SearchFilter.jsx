export const SearchFilter = () => {
  return (
    <section className="section-searchFilter container">
      <input type="text" placeholder="search" />

      <div>
        <button>ASC</button>
      </div>

      <div>
        <button>DES</button>
      </div>

      <div>
        <select className="select-section">
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
