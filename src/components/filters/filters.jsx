import React, { useState } from 'react';
import './filters.css';
import { Select } from '@material-ui/core';
import { ChevronRight20Filled } from '@fluentui/react-icons';
import Button from '@mui/material/Button';



const Filters = () => {
  

 
  return (
    <div className='filtersAndSortWrapper'>
      <div className='contentwrapperPlusbtn'>
        <div className='filtersContainer'>
          <h2 > Filter & Sort</h2>
            
          <div className='HeaderPlusArrowPricepannel'>
              <h3 className='titleFilterspannel'>Price</h3>
              <ChevronRight20Filled className='arrowIcon'/>
            </div>
            
            <div className='optionsPricewithtext'>
              <label className='priceOption'> 
                High to Low
                <input type='radio' name='radio'/>
                <span class='checkmark'></span>
              </label>
              <label className='priceOption'>Low to High
                <input type='radio' name='radio'/>
                <span class='checkmark'></span>
              </label>
              <hr className='hrOfSelectedFilter'/>
            </div>


            
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
