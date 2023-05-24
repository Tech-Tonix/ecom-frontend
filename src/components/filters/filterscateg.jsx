import React, { useState } from 'react'
import './filterscateg.css';
import { ChevronRight20Filled } from '@fluentui/react-icons';
import Filterpannel from './filterpannel';



const Filterscateg = () => {

  const checkboxes = [
    {id: 1, label:'Shoes'},
    { id: 2, label: 'T-shirts' },
    { id: 3, label: 'Nike' },
    { id: 4, label: 'Checkbox 4' },
    { id: 5, label: 'Checkbox 5' },
    { id: 6, label: 'Checkbox 6' },
    { id: 7, label: 'Checkbox 7' },
    { id: 8, label: 'Checkbox 8' },
  ]

  const [hideFilterCategory , setHideFilterCategory] = useState(false); 

  const handleHideCategory = () =>{
    setHideFilterCategory(!hideFilterCategory); 
  }


  return (
    <div className='filtersAndSortWrapperCateg'>
      <div className='contentwrapperPlusbtn'>
        <div className='filtersContainerCateg'>
          <h2 > Filter & Sort</h2>
            
          <div className='HeaderPlusArrowPriceCateg'>
              <h3 className='titleFilterscateg'>Price</h3>
              <ChevronRight20Filled className='arrowIconCateg'/>
            </div>
            <hr/>


            
          <div className='HeaderPlusArrowPriceCateg' onClick={handleHideCategory}>
              <h3 className='titleFilterscateg'>Category</h3>
              <ChevronRight20Filled className='arrowIconCategCategory'/>
            </div>
            <hr/>
            <div className='CategoryOptions'>
              {checkboxes.map((checkbox) => (
                <div key={checkbox.id} className='checkbox-item'>
                    <input type='checkbox' id={checkbox.id}/>
                    <label htmlFor={checkbox.id}>{checkbox.label}</label>
                </div>
              ))}
            </div>
            <hr className='hrOfCatgories'/>
                {hideFilterCategory && <Filterpannel/>}
            
          <div className='HeaderPlusArrowPriceCateg'>
              <h3 className='titleFilterscateg'>Color</h3>
              <ChevronRight20Filled className='arrowIconCateg'/>
            </div>
            <hr/>

            
          <div className='HeaderPlusArrowPriceCateg'>
              <h3 className='titleFilterscateg'>Brand</h3>
              <ChevronRight20Filled className='arrowIconCateg'/>
            </div>
            <hr/>

            
          <div className='HeaderPlusArrowPriceCateg'>
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
