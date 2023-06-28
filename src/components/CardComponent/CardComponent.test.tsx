import { render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import '@testing-library/jest-dom'
import CardComponent from './Index';
import * as PokemonDetail from '../../context/PokemonDetailsContext';

jest.mock('../../context/PokemonDetailsContext')


describe("CardComponent", () => {
    it("should render correctly", () =>{
        render(<CardComponent name='fake-pokemon' />, {wrapper: BrowserRouter});
       
        expect(screen.getByText('fake-pokemon')).toBeInTheDocument()
    })

    it('should load pokemon details', async ()=>{

        const img = faker.image
        const name =  faker.person
        const pokemonDetailMocked = jest.mocked(PokemonDetail.usePokemonDetail)

        pokemonDetailMocked.mockReturnValue({pokemonDetails:{
            img,
            name
        }}as any)
        
        const response = PokemonDetail.usePokemonDetail();
    
        expect(response).toEqual(
            expect.objectContaining({
                pokemonDetails:{
                    img,
                    name
                }
            })
        )
    })

})