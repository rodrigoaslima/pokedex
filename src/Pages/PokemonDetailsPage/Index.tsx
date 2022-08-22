import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePokemonDetail } from '../../context/PokemonDetailsContext';

import { Container, PokemonContainer, PokemonStatsContainer, Text, StatsValor, Footer } from './styles';

const PokemonDetailsPage: React.FC = () => {

    const {pokemon} = useParams<string>();
    const {getPokemonDetails,pokemonDetails} = usePokemonDetail();

      useEffect(()=>{
        getPokemonDetails(pokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return(
    <Container>
        <h1>{pokemonDetails.name}</h1>

        <PokemonContainer>

            {
                pokemonDetails.stats ? 

                <>
                    <PokemonStatsContainer>
                        {pokemonDetails.stats.map((e: any) => (
                            <>
                                <Text>{e.stat.name}</Text>
                                <StatsValor>{e.base_stat}</StatsValor>
                            </>  
                        ))}
                    </PokemonStatsContainer>

                    <img src={pokemonDetails.img} alt={pokemonDetails.name} />
                    <Footer>       
                        {pokemonDetails.type.map((e:any)=> (
                            <>
                                <Text>{e.type.name}</Text>
                            </>
                        ))}

                    
                        <Text>Number: {pokemonDetails.order}</Text>
                        <Text>height: {pokemonDetails.height} inches</Text>
                        <Text>weight: {pokemonDetails.weight} pounds</Text>
                    </Footer>
                </> : <>
                </>

            }
            
            
        </PokemonContainer>
    </Container>
    
  );
}

export default PokemonDetailsPage;