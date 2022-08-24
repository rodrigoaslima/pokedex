import { Routes as Switch, Route } from 'react-router-dom'
import FavoritesPokemonPage from './Pages/FavoritesPokemonPage/Index';
import Main from './Pages/Main/Index';
import PokemonDetailsPage from './Pages/PokemonDetailsPage/Index';

const Routes = () => {
  return (
    <Switch>
        <Route path="/" element={<Main />} />
        <Route path="/details/:pokemon" element={<PokemonDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPokemonPage />} />
    </Switch>
  );
}

export default Routes;