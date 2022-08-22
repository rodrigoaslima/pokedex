import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Api from '../../services/api';

import { Container } from './styles';

interface PokemonData{
  name: string
}

interface PokemonProps{
  name: string;
  img: string;
}

const CardComponent = ({name}: PokemonData) => {
  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps)

  const navigate = useNavigate();

  function handleClick(pokemon: PokemonProps) {
    navigate(`/details/${pokemon.name}`);
  }


  async function getPokemon(){
    const response = await Api.get(`pokemon/${name}`);
    setPokemon({
      img: response.data.sprites.front_default,
      name: response.data.name,
    });
  }

  useEffect(()=>{
    getPokemon();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

 
  return(
    <Container onClick={()=>{handleClick(pokemon)}}>
      <img src={pokemon.img} alt={pokemon.img}/>
      <span>{name}</span>
    </Container>
  );
}

export default CardComponent;