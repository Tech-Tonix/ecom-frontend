import React from 'react'
import './filterssize.css';
import { ChevronRight20Filled } from '@fluentui/react-icons';
import { useState } from 'react';
import Filterpannel from './filterpannel';

const Filterssize = ({onSizeChange}) => {

  const sizes = ['XS', 'S' , 'M' ,'L', 'XL'];

  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeChange = (size) =>{
    setSelectedSize(size); 
    
  }
  const [hideFilterSize, setHideFilterSize] = useState(false)
  const handleHideFilterSize =()=>{
    setHideFilterSize(!hideFilterSize);
  }
  return (
    <div className='filtersAndSortWrapperSize'>
    <div className='contentwrapperPlusbtn'>
      <div className='filtersContainerSize'>
        <h2 > Filter & Sort</h2>
          
        <div className='HeaderPlusArrowPriceSize'>
            <h3 className='titleFilterssize'>Price</h3>
            <ChevronRight20Filled className='arrowIconSize'/>
          </div>
          <hr/>

          <div className='HeaderPlusArrowPriceSize'>
            <h3 className='titleFilterssize'>Category</h3>
            <ChevronRight20Filled className='arrowIconSize'/>
          </div>
          <hr/>

          <div className='HeaderPlusArrowPriceSize'>
            <h3 className='titleFilterssize'>Color</h3>
            <ChevronRight20Filled className='arrowIconSize'/>
          </div>
          <hr/>


          <div className='HeaderPlusArrowPriceSize'>
            <h3 className='titleFilterssize'>Brand</h3>
            <ChevronRight20Filled className='arrowIconSize'/>
          </div>
          <hr/>


          <div className='HeaderPlusArrowPriceSize' onClick={handleHideFilterSize}>
            <h3 className='titleFilterssize'>Size</h3>
            <ChevronRight20Filled className='arrowIconSizeSIZE'/>
          </div>
          <div className='sizeOptions'>
            <div className='sizeOptionsRow'>
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`sizeOption ${selectedSize === size ? 'selectedSizeOption' : ''} ${size}`}
                  onClick={() => handleSizeChange(size)}
                >
                  <span className='sizeLabels'>{size}</span>
                </div>
              ))

              }

            </div>

          </div>
         
                
          {hideFilterSize && <Filterpannel/>}


      

      <div className='btnContainerSize'>
     
      <button className='btnFiltersSizeOpt'> SEE PRODUCTS </button>

      </div>
      </div>
  </div>
  </div>
  )
}

export default Filterssize
