import React, { useState } from 'react';
import './filters.css';

import { ChevronRight20Filled } from '@fluentui/react-icons';
import Button from '@mui/material/Button';
import Filterpannel from './filterpannel';


const Filters = () => {
  
  const [hideFilters,setHideFilters] = useState(false);

  const handleArrowClickPrice = () =>{
      setHideFilters(!hideFilters);
  }
 
  return (
    <div className='filtersAndSortWrapperPrice'>
      <div className='contentwrapperPlusbtnPrice'>
        <div className='filtersContainerPrice'>
        <div className='h2WrapperFilter'>
          <h2 > Filter & Sort</h2>
       </div>
            
          <div className='HeaderPlusArrowPricePrice' onClick={handleArrowClickPrice}>
              <h3 className='titleFiltersPrice'>Price</h3>
              <ChevronRight20Filled className='arrowIconPrice'/>
            </div>
            
            <div className='optionsPricewithtextPrice'>
              <label className='priceOption'> 
                High to Low
                <input type='radio' name='radio'/>
                <span class='checkmark'></span>
              </label>
              <label className='priceOption'>Low to High
                <input type='radio' name='radio'/>
                <span class='checkmark'></span>
              </label>
              
            </div>
            <hr className='hrOfPrice' />

            {hideFilters && <Filterpannel/>}

            
          <div className='HeaderPlusArrowPricepannel'>
              <h3 className='titleFilterspannel'>Category</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>

            
          <div className='HeaderPlusArrowPricepannel'>
              <h3 className='titleFilterspannel'>Color</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>

            
          <div className='HeaderPlusArrowPricepannel'>
              <h3 className='titleFilterspannel'>Brand</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>

            
          <div className='HeaderPlusArrowPricepannel'>
              <h3 className='titleFilterspannel'>Size</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>


        </div>

        <div className='btnContainerPrice'>
       
        <button className='btnFiltersPriceOpt'> SEE PRODUCTS </button>

        </div>
        </div>
    </div>
  )
}

export default Filters
