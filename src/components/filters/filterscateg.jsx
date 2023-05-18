import React from 'react'
import './filterscateg.css';
import { ChevronRight20Filled } from '@fluentui/react-icons';


const Filterscateg = () => {
  return (
    <div className='filtersAndSortWrapper'>
      <div className='contentwrapperPlusbtn'>
        <div className='filtersContainerCateg'>
          <h2 > Filter & Sort</h2>
            
          <div className='HeaderPlusArrowPriceCateg'>
              <h3 className='titleFilterscateg'>Price</h3>
              <ChevronRight20Filled className='arrowIconCateg'/>
            </div>
            <hr/>


            
          <div className='HeaderPlusArrowPricecateg'>
              <h3 className='titleFilterscateg'>Category</h3>
              <ChevronRight20Filled className='arrowIconCateg'/>
            </div>
            <hr/>

            
          <div className='HeaderPlusArrowPricecateg'>
              <h3 className='titleFilterscateg'>Color</h3>
              <ChevronRight20Filled className='arrowIconCateg'/>
            </div>
            <hr/>

            
          <div className='HeaderPlusArrowPricecateg'>
              <h3 className='titleFilterscateg'>Brand</h3>
              <ChevronRight20Filled className='arrowIconCateg'/>
            </div>
            <hr/>

            
          <div className='HeaderPlusArrowPricecateg'>
              <h3 className='titleFilterscateg'>Size</h3>
              <ChevronRight20Filled className='arrowIconCateg'/>
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

export default Filterscateg
