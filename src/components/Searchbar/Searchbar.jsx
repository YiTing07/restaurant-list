import './Searchbar.css';

export default function Searchbar() {
  return (
    <div className="searchbar">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="搜尋餐廳、類別或關鍵字" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

  )
}