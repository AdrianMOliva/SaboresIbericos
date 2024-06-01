import "./SearchBar.css";
import searchLogo from "../assets/Search.png";

function SearchBar({ search, setSearch }) {
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
