import React, { useEffect } from 'react';
import CardComponent from '../../components/CardComponent/Index';
import { usePokemon } from '../../context/PokemonContext';

import { Container, PokemonContaner } from './styles';

const Main: React.FC = () => {

    const { getPokemonList,pokemonList} = usePokemon();
    
    useEffect(()=>{
        getPokemonList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return(
    <Container>

      <div>
        <h1>POKEDEX</h1>
      </div>

      <PokemonContaner>

        {pokemonList.map((e, index) => (
          <CardComponent key={index} name={e.name}/>
        ))}

      </PokemonContaner>

      
    </Container>
    
  );
}

export default Main;