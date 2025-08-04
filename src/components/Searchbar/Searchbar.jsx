import './Searchbar.css';

export default function Searchbar({ query, onSearchChange, onSearchClick }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="searchbar">
      <form className="d-flex" role="search" onSubmit={handleSubmit} >
        <input
          className="form-control me-2"
          type="search"
          placeholder="搜尋餐廳、類別或關鍵字"
          aria-label="Search"
          value={query}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={() => onSearchClick()}
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  )
}