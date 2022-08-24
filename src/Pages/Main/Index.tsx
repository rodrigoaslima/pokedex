import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../../components/CardComponent/Index';
import PaginationComponent from '../../components/PaginationComponent/Index';
import { usePokemon } from '../../context/PokemonContext';

import { Container, PokemonContaner } from './styles';

const Main: React.FC = () => {

    const { getPokemonList, getNextPage, getPreviousPage, pokemonList, totalPages} = usePokemon();
    
    function handleNextPage(){
      getNextPage();
    }
    
    useEffect(()=>{
        getPokemonList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return(
    <Container>

      <div style={{display:'flex', alignItems: 'center'}}>
        <h1>POKEDEX</h1>
        <Link 
          style={{color:'#fff', marginLeft: '10px'}}
          to={'/favorites'}>Favorites</Link>
      </div>

      <PokemonContaner>

        {pokemonList.map((e, index) => (
          <CardComponent key={index} name={e.name}/>
        ))}

      </PokemonContaner>

      <PaginationComponent
        handleNextPage={handleNextPage}
        handlePreviousPage={getPreviousPage}
        totalPages={totalPages}
      />

      
    </Container>
    
  );
}

export default Main;