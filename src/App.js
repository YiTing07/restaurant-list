import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import { FavoriteProvider } from './context/FavoritesContext';

function App() {
  return (
    <div className="App">
      <FavoriteProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </HashRouter>
      </FavoriteProvider>
    </div >
  );
}

export default App;
