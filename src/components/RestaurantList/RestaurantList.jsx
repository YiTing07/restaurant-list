import './RestaurantList.css'
import restaurants from '../../assets/jsons/restaurants.json';
import RestaurantModal from '../RestaurantModal/RestaurantModal';
import Pagination from '../Pagination/Pagination';

import { useState } from 'react';

const restaurantPerPage = 8;

export default function RestaurantList() {
  const [selectRestaurant, setSelectedRestaurant] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  //計算分頁資料
  const startIndex = (currentPage - 1) * restaurantPerPage;
  const endIndex = startIndex + restaurantPerPage;
  const paginatedRestaurants = restaurants.slice(startIndex, endIndex);

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
            {paginatedRestaurants.map((item) => (
              <div className="card" key={item.id}>
                <img
                  className="card-img-top"
                  src={item.image}
                  data-bs-toggle="modal"
                  data-bs-target="#restaurantModal"
                  alt="restaurant-image"
                  onClick={() => handleClick(item)}
                />
                <div className="card-body">
                  <h3 className='card-title'>{item.name}</h3>
                  <p className="category mb-2"><i class="bi bi-fork-knife"></i> {item.category}</p>
                  <span className="rating">{item.rating} <i class="bi bi-star"></i></span>
                </div>
                <div className="fv-btn">
                  <button type="button" class="btn btn-outline-danger btn-sm">收藏 <i class="bi bi-heart"></i></button>
                </div>
              </div>
            ))}
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
