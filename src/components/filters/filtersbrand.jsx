import React from 'react'
import './filtersbrand.css';
import Filterpannel from './filterpannel';
import { useState } from 'react';
import { ChevronRight20Filled } from '@fluentui/react-icons';


const Filtersbrand = () => {
  const checkboxesbrand = [
    {id: 1, label:'Shoes'},
    { id: 2, label: 'T-shirts' },
    { id: 3, label: 'Nike' },
    { id: 4, label: 'Checkbox 4' },
    { id: 5, label: 'Checkbox 5' },
    { id: 6, label: 'Checkbox 6' },
    { id: 7, label: 'Checkbox 7' },
    { id: 8, label: 'Checkbox 8' },
  ]

  const [hideFilterBrand , setHideFilterBrand] = useState(false); 

  const handleHideBrand = () =>{
    setHideFilterBrand(!hideFilterBrand); 
  }


  return (
    <div className='filtersAndSortWrapperBrand'>
      <div className='contentwrapperPlusbtn'>
        <div className='filtersContainerBrand'>
          <h2 > Filter & Sort</h2>
            
          <div className='HeaderPlusArrowPriceBrand'>
              <h3 className='titleFiltersbrand'>Price</h3>
              <ChevronRight20Filled className='arrowIconBrand'/>
            </div>
            <hr/>

            <div className='HeaderPlusArrowPriceBrand'>
              <h3 className='titleFiltersbrand'>Category</h3>
              <ChevronRight20Filled className='arrowIconBrand'/>
            </div>
            <hr/>
            
          <div className='HeaderPlusArrowPriceBrand'>
              <h3 className='titleFiltersbrand'>Color</h3>
              <ChevronRight20Filled className='arrowIconBrand'/>
            </div>
            <hr/>

            
            <div className='HeaderPlusArrowPriceBrand' onClick={handleHideBrand}>
              <h3 className='titleFiltersbrand'>Brand</h3>
              <ChevronRight20Filled className='arrowIconBrandBRAND'/>
            </div>
            
            <div className='BrandOptions'>
              {checkboxesbrand.map((checkbox) => (
                <div key={checkbox.id} className='checkboxbrand-item'>
                    <input type='checkbox' id={checkbox.id}/>
                    <label htmlFor={checkbox.id}>{checkbox.label}</label>
                </div>
              ))}
            </div>
            <hr className='hrOfBrand'/>
      
                {hideFilterBrand && <Filterpannel/>}

            
          <div className='HeaderPlusArrowPriceBrand'>
              <h3 className='titleFiltersbrand'>Size</h3>
              <ChevronRight20Filled className='arrowIconBrand'/>
            </div>
            <hr />


        </div>

        <div className='btnContainerBrand'>
       
        <button className='btnFiltersBrandOpt'> SEE PRODUCTS </button>

        </div>
        </div>
    </div>
    
  )
}

export default Filtersbrand
