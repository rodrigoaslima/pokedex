import CardComponent from '../../components/CardComponent/Index';
import { useFavorite } from '../../context/FavoritesContext';

import { Container, PokemonContaner } from './styles';
  
const FavoritesPokemonPage = () => {
  
  const {  favoriteList } = useFavorite();
   
  return(
    <Container>

      <div>
        <h1>POKEDEX</h1>
      </div>

      <PokemonContaner>

        {favoriteList.map((e, index) => (
          <CardComponent key={index} name={e}/>
        ))}

      </PokemonContaner>
      
    </Container>
    
  );
}

export default FavoritesPokemonPage;