import React from 'react'
import './filterpannel.css'
import { Select } from '@material-ui/core';
import { ChevronRight20Filled } from '@fluentui/react-icons';

const Filterpannel = () => {

    const handleClickPrice = () =>{

    }

    const handleClickCategory = () =>{

    }

    const handleClickColor = () =>{

    }

    const handleClickBrand = () =>{

    }

    const handleClickSize = () =>{

    }



  return (
    <div className='filtersAndSortWrapperpannel'>
      <div className='contentwrapperPlusbtnpannel'>
        <div className='filtersContainerpannel'>
          <h2 > Filter & Sort</h2>

          <div className='HeaderPlusArrowPricepannel'>
              <h3 className='titleFilterspannel'>Price</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>

            <div className='HeaderPlusArrowCategpannel'>
              <h3 className='titleFilterspannel'>Category</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>

            <div className='HeaderPlusArrowColorpannel'>
              <h3 className='titleFilterspannel'>Color</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>

            <div className='HeaderPlusArrowBrandpannel'>
              <h3 className='titleFilterspannel'>Brand</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>

            <div className='HeaderPlusArrowSizepannel'>
              <h3 className='titleFilterspannel'>Size</h3>
              <ChevronRight20Filled className='arrowIconpannel'/>
            </div>
            <hr/>
        </div>


        <div className='btnContainerpannel'>
            <button className='btnFiltersPannel'> SEE PRODUCTS </button>
        </div>
        </div>
    </div>
  )
}

export default Filterpannel;
