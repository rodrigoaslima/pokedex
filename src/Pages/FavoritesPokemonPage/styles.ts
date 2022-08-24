import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;    
  
`;

export const PokemonContaner = styled.div`
    justify-content: space-evenly;
    background-color: #ffff;
    width: 100vh;
    padding: 15px;
    border-style: solid;
    border-radius: 20px;
    border-color: #000;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

`;
