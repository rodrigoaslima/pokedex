import styled from 'styled-components';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;    
  
`;
export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #49d0b0;
    width: 50vh;
    padding: 15px;
    border-style: solid;
    border-radius: 20px;
    border-color: #000;

`;

export const Header = styled.div`
    display: flex;
    align-items: center;
`;

export const NameText = styled.h1`
    margin: 10px;
`;

export const FavoritesIcons = styled(AiFillStar)`
    color: #fff000

`;

export const UnfavoriteIcons = styled(AiOutlineStar)`

`;

export const PokemonStatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 0.3fr);
    justify-content: center;
`;

export const Text = styled.div`
    font-size: 20px;
    color: #fff;
`;

export const StatsValor = styled.div`
    color: #fff;
    justify-self: center;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;