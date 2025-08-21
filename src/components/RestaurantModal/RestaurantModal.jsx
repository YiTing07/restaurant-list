import './RestaurantModal.css';

export default function RestaurantModal({ selectRestaurant }) {
  return (
    <div
      className="modal fade"
      id="restaurantModal"
      tabIndex="-1"
      aria-labelledby="restaurantModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="restaurantModalLabel">{selectRestaurant.name}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="poster">
              <img src={selectRestaurant.image} alt="restaurant-image" />
            </div>
            <div className="restaurant-info mt-3">
              <h2>{selectRestaurant.name}</h2>
              <p className="category">類型：{selectRestaurant.category}</p>
              <p className="location">地址：{selectRestaurant.location}</p>
              <p className="description">介紹：{selectRestaurant.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}