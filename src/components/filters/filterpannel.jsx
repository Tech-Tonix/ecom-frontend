import React from 'react'
import './filterpannel.css'
import { Select } from '@material-ui/core';
import { ChevronRight20Filled } from '@fluentui/react-icons';
import { useState } from 'react';
import Filters from './filters';
import Filterscateg from './filterscateg';
import Filtersbrand from './filtersbrand';
import Filterscolor from './filterscolor';
import Filterssize from './filterssize';



const Filterpannel = () => {

  const [showFilters, setShowFilters] = useState(false);
    const handleClickPrice = () =>{
        setShowFilters(!showFilters);
    }
  
  const [showFiltersCategory, setShowFiltersCategory] = useState(false);
    const handleClickCategory = () =>{
      setShowFiltersCategory(!showFiltersCategory);

    }
  
  const [showFilterColor, setShowFilterColor] = useState(false);
    const handleClickColor = () =>{
      setShowFilterColor(!showFilterColor);
    }

  const [showFilterBrand, setShowFilterBrand] = useState(false);
    const handleClickBrand = () =>{
      setShowFilterBrand(!showFilterBrand);
    }
  const [showFilterSize, setShowFilterSize] = useState(false);
    const handleClickSize = () =>{
      setShowFilterSize(!showFilterSize); 
    }



  return (
    <div className='filtersAndSortWrapperpannel'>
      <div className='contentwrapperPlusbtnpannel'>
        <div className='filtersContainerpannel'>
          
          <div className='h2WrapperFilter'>
          <h2 > Filter & Sort</h2>
          </div>
          <div className='HeaderPlusArrowPricepannel' onClick={handleClickPrice}>
              <h3 className='titleFilterspannel'>Price</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>

            {showFilters && <Filters/>}

            <div className='HeaderPlusArrowCategpannel' onClick={handleClickCategory}>
              <h3 className='titleFilterspannel'>Category</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>

            {showFiltersCategory && <Filterscateg/>}

            <div className='HeaderPlusArrowColorpannel' onClick={handleClickColor}> 
              <h3 className='titleFilterspannel'>Color</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>
            {showFilterColor && <Filterscolor/>}

            <div className='HeaderPlusArrowBrandpannel' onClick={handleClickBrand}>
              <h3 className='titleFilterspannel'>Brand</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>
            {showFilterBrand && <Filtersbrand/>}

            <div className='HeaderPlusArrowSizepannel' onClick={handleClickSize}>
              <h3 className='titleFilterspannel'>Size</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>
            {showFilterSize && <Filterssize/>}
        </div>


        <div className='btnContainerpannel'>
            <button className='btnFiltersPannel'> SEE PRODUCTS </button>
        </div>
        </div>
    </div>
  )
}

export default Filterpannel;
