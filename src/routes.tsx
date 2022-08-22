import { Routes as Switch, Route } from 'react-router-dom'
import Main from './Pages/Main/Index';
import PokemonDetailsPage from './Pages/PokemonDetailsPage/Index';

const Routes = () => {
  return (
    <Switch>
        <Route path="/" element={<Main />} />
        <Route path="/details/:pokemon" element={<PokemonDetailsPage />} />
    </Switch>
  );
}

export default Routes;