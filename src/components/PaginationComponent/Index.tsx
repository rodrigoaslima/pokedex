import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';

const PaginationComponent = (props: any) => {

    const {handleNextPage, handlePreviousPage, totalPages} = props
  
  return(
    <div style={{display: 'flex', margin: '10px'}}>
        <button
          style={{background: 'none',
            color:" #ffff",
            border: "none",
            marginRight: '10px'
          }} 
          onClick={handlePreviousPage}>
          <FaArrowLeft/>
        </button>
        
        <div>{totalPages} Pages</div>

        <button 
          style={{background: 'none',
          color:" #ffff",
          border: "none",
          marginLeft: '10px'}}
          onClick={handleNextPage}
        >
            <FaArrowRight/>
        </button>

    </div>
  );
}

export default PaginationComponent;