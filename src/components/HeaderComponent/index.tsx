import { Link } from 'react-router-dom';

import { Container } from './styles';

const HeaderComponent = () => {
  return(
    <Container >
        <h1>POKEDEX</h1>
        <Link 
          style={{color:'#fff', marginLeft: '10px'}}
          to={'/favorites'}>Favorites</Link>
      </Container>
  )
}

export default HeaderComponent;