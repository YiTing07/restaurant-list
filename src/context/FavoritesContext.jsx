import {createContext, useContext, useState, useEffect} from 'react';

// 建立 context 預設值
const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext); 

export const FavoriteProvider =  ({children}) => {
  const [favoriteList, setFavoriteList] = useState([]);

  // 讀取 localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favoriteRestaurants')) || [];
    setFavoriteList(stored);
  }, []);

  // 每次 favoriteList 更新，就同步更新 localStorage
  useEffect(() => {
    localStorage.setItem('favoriteRestaurants', JSON.stringify(favoriteList))
  }, [favoriteList]);

  // 加入或移除收藏
  const toggleFavorite = (restaurant) => {
    setFavoriteList((prev) => {
      if (prev.some((item) => item.id === restaurant.id)) {
        return prev.filter((item) => item.id !== restaurant.id)
      } else {
        return [...prev, restaurant]
      }
    })
  }

  return (
    <FavoritesContext.Provider value={{favoriteList, toggleFavorite}}>
      {children}
    </FavoritesContext.Provider>
  )
}