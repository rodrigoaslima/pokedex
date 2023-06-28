import { render, screen } from '@testing-library/react';
import HeaderComponent from '.';
import { BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom'

describe("HeaderComponent", () => {
    it("should render correctly", () =>{
        render(<HeaderComponent/>, {wrapper: BrowserRouter});
       
        screen.getByText('POKEDEX')
        screen.getByText('Favorites')
    })
})

/**
 * it("should call favorites when hits the button", ()=>{
        render(<Link to={'/favorites'}>Favorites</Link>, {wrapper: BrowserRouter});
    })
    const btnFavorites = screen.getByText("Favorites")

    fireEvent.click(btnFavorites)
   

    expect(mockNavigate).toHaveBeenCalledWith('/favorites')
 */
