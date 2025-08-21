import './RestaurantList.css'
import RestaurantModal from '../RestaurantModal/RestaurantModal';
import Pagination from '../Pagination/Pagination';

import { useState } from 'react';
import { useFavorites } from '../../context/FavoritesContext';

const restaurantPerPage = 8;

export default function RestaurantList({ filteredRestaurants }) {
  const [selectRestaurant, setSelectedRestaurant] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { favoriteList, toggleFavorite } = useFavorites();

  //計算分頁資料
  const startIndex = (currentPage - 1) * restaurantPerPage;
  const endIndex = startIndex + restaurantPerPage;
  const paginatedRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  function handleClick(item) {
    setSelectedRestaurant(item)
  }

  function handlePageChange(page) {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="container mt-5">
        <div className="data-panel">
          <h2 className="my-3">熱門餐廳</h2>
          <div className="restaurant-list">
            {paginatedRestaurants.length > 0 ? (
              paginatedRestaurants.map((item) => (
                <div className="card" key={item.id}>
                  <img
                    className="card-img-top"
                    src={item.image}
                    data-bs-toggle="modal"
                    data-bs-target="#restaurantModal"
                    alt={item.name}
                    onClick={() => handleClick(item)}
                  />
                  <div className="card-body">
                    <h3 className='card-title'>{item.name}</h3>
                    <p className="category mb-2"><i className="bi bi-fork-knife"></i> {item.category}</p>
                    <span className="rating">{item.rating} <i className="bi bi-star"></i></span>
                  </div>
                  <div className="fv-btn">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => toggleFavorite(item)}
                    >
                      {favoriteList.some((r) => r.id === item.id) ? '已收藏 ' : '收藏 '}
                      <i className={`bi ${favoriteList.some((r) => r.id === item.id) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                    </button>
                  </div>
                </div>
              )
              )
            ) : (
              <div className="no-result">
                <p><i className="bi bi-emoji-frown"></i> 沒有符合條件的餐廳</p>
              </div>
            )
            }
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      <RestaurantModal selectRestaurant={selectRestaurant} />
    </>


  )
}
