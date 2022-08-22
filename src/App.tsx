import { PokemonProvider } from './context/PokemonContext';
import { PokemonDetalisProvider } from './context/PokemonDetailsContext';
import { FavoritesProvider } from './context/FavoritesContext';

import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';



function App() {

  return (
    
      <PokemonProvider>
        <PokemonDetalisProvider>
          <FavoritesProvider>
            <GlobalStyle/>
            <Router >
              <Routes />
            </Router>
          </FavoritesProvider>
        </PokemonDetalisProvider>
      </PokemonProvider>
  );
}

export default App;
