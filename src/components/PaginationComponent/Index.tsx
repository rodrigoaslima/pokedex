import React from 'react';

// import { Container } from './styles';

const PaginationComponent = (props: any) => {

    const {handleNextPage, handlePreviousPage, totalPages} = props
  
  return(
    <div>
        <button onClick={handlePreviousPage}>
            <div>{'<'}</div>
        </button>
        
        <div>Pages de {totalPages}</div>

        <button onClick={handleNextPage}>
            <div>{'>'}</div>
        </button>

    </div>
  );
}

export default PaginationComponent;