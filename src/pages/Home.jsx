import Header from '../components/Header/Header';
import Searchbar from '../components/Searchbar/Searchbar';
import RestaurantList from '../components/RestaurantList/RestaurantList';
import restaurants from '../assets/jsons/restaurants.json';

import { useState } from 'react';


export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)

  function handleSearchClick() {
    const filtered = restaurants.filter((restaurant) => (
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(searchQuery.toLowerCase())
    ))
    setFilteredRestaurants(filtered);
  }

  return (
    <div className="home">
      <Header />
      <Searchbar query={searchQuery} onSearchChange={setSearchQuery} onSearchClick={handleSearchClick} />
      <RestaurantList filteredRestaurants={filteredRestaurants} />
    </div>
  )
}