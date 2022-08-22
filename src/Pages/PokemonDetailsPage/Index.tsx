import React, { useEffect } from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import { useParams } from 'react-router-dom';
import { useFavorite } from '../../context/FavoritesContext';
import { usePokemonDetail } from '../../context/PokemonDetailsContext';

import { Container, Header, NameText, PokemonContainer, PokemonStatsContainer, Text, StatsValor, Footer, FavoritesIcons, UnfavoriteIcons  } from './styles';

const PokemonDetailsPage: React.FC = () => {

    const {pokemon} = useParams<string>();
    const {getPokemonDetails,pokemonDetails} = usePokemonDetail();
    const {getFavoritePokemon, favoriteList} = useFavorite()
    console.log('pokemon: ', pokemon)
    console.log('favoriteList: ', favoriteList)
    console.log('favoriteList.findIndex(item => item.name === pokemon: ', favoriteList.findIndex(item => item.name === pokemon))


    useEffect(()=>{
        getPokemonDetails(pokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        favoriteList
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[favoriteList])
    
  return(
    <Container>
        <Header>
            <NameText>{pokemonDetails.name}</NameText>
            {favoriteList.findIndex(item => item.name === pokemon) ? 
                <UnfavoriteIcons onClick={()=>getFavoritePokemon(pokemonDetails)} />

                :
                
                <FavoritesIcons onClick={()=>getFavoritePokemon(pokemonDetails)} />
            }
        </Header>
        

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