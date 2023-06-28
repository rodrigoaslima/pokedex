import React, { useEffect } from 'react';
import CardComponent from '../../components/CardComponent/Index';
import PaginationComponent from '../../components/PaginationComponent/Index';
import { usePokemon } from '../../context/PokemonContext';

import { Container, PokemonContaner } from './styles';
import HeaderComponent from '../../components/HeaderComponent';

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

      <HeaderComponent/>

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