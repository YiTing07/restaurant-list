import '../components/RestaurantList/RestaurantList.css';
import { useState} from 'react';
import Header from '../components/Header/Header';
import RestaurantModal from '../components/RestaurantModal/RestaurantModal';


export default function Favorite() {
  const [favoriteList, setFavoriteList] = useState([]);
  const [selectRestaurant, setSelectedRestaurant] = useState("");


  function handleClick(item) {
    setSelectedRestaurant(item);
  }

  function handleRemoveFavorite(id) {
    const updatedFavorites = favoriteList.filter((item) => item.id !== id);
    setFavoriteList(updatedFavorites);
  }

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="data-panel">
          <h2 className="my-3">我的收藏</h2>
          {favoriteList.length > 0 ? (
            <div className="restaurant-list">
              {favoriteList.map((item) => (
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
                    <p className="category mb-2"><i className="bi bi-fork-knife"></i> {item.category}</p>
                    <span className="rating">{item.rating} <i className="bi bi-star"></i></span>
                  </div>
                  <div className="fv-btn">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleRemoveFavorite(item.id)}
                    >
                      移除收藏 <i className="bi bi-heart-fill"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-result">
              <p><i className="bi bi-emoji-frown"></i> 還沒有收藏任何餐廳</p>
              <p className="text-muted">快去探索並收藏您喜歡的餐廳吧！</p>
            </div>
          )}
        </div>
      </div>

      <RestaurantModal selectRestaurant={selectRestaurant} />
    </>
  );
}
