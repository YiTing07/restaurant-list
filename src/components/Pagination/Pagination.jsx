import './Pagination.css';
import restaurants from '../../assets/jsons/restaurants.json';

export default function Pagination({currentPage, onPageChange}) {
  const restaurantPerPage = 8;
  const pages = Math.ceil(restaurants.length / restaurantPerPage)
  const pageNumbers = [];

  for(let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-lg">
        <li className="page-item">
          <button
            className="page-link" 
            aria-label="Previous"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}  
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {pageNumbers.map((pageNumber) => (
          <li className="page-item" key={pageNumber}>
            <button
              className="page-link"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        
        <li className="page-item">
          <button 
            className="page-link"
            aria-label="Next"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pages}  
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}