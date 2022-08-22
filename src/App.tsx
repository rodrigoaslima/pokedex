import { PokemonProvider } from './context/PokemonContext';
import { PokemonDetalisProvider } from './context/PokemonDetailsContext';

import GlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';



function App() {

  return (
    
      <PokemonProvider>
        <PokemonDetalisProvider>
          <GlobalStyle/>
          <Router >
            <Routes />
          </Router>
        </PokemonDetalisProvider>
      </PokemonProvider>
  );
}

export default App;
