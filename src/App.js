import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import { FavoriteProvider } from './context/FavoritesContext';

function App() {
  return (
    <div className="App">
      <FavoriteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </BrowserRouter>
      </FavoriteProvider>
    </div >
  );
}

export default App;
