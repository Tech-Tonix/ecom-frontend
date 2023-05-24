import React, { useState } from 'react'
import './filterscolor.css'; 
import { ChevronRight20Filled } from '@fluentui/react-icons';
import { color } from '@mui/system';
import { Key } from '@mui/icons-material';
import Filterpannel from './filterpannel';


const Filterscolor = ({onColorChange}) => {

  const colors  = ['green', 'red', 'yellow' , 'white', 'Black', 'Brown'] ;

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) =>{
    setSelectedColor(color); 
    onColorChange(color);
  }


  const [filtercolorHide, setIsFilterColorHide] = useState(false); 
  const handleFilterColorHide= () =>{
    setIsFilterColorHide(!filtercolorHide);
  }
  
  
 

  return (
    <div className='filtersAndSortWrapperColor'>
      <div className='contentwrapperPlusbtn'>
        <div className='filtersContainerColor'>
          <h2 > Filter & Sort</h2>
            
          <div className='HeaderPlusArrowPriceColor'>
              <h3 className='titleFilterscolor'>Price</h3>
              <ChevronRight20Filled className='arrowIconColor'/>
            </div>
            <hr/>

            <div className='HeaderPlusArrowPriceColor'>
              <h3 className='titleFilterscolor'>Category</h3>
              <ChevronRight20Filled className='arrowIconColor'/>
            </div>
            <hr/>
            
          <div className='HeaderPlusArrowPriceColor' onClick={handleFilterColorHide}>
              <h3 className='titleFilterscolor'>Color</h3>
              <ChevronRight20Filled className='arrowIconColorCOLOR'/>
            </div>
            <div className='colorOptions'>
              <div  className='colorOptionsRow'> 
               {colors.map((color) => (
                <div 
                  key={color}
                  className={`colorOption ${selectedColor === color ? 'selected' : ''} ${color}`}
                  onClick={() => handleColorChange(color)}
                >
                </div>
               ))}
              </div>
    
              </div>
              {filtercolorHide && <Filterpannel/>}
              <hr className='hrOfColor'/>
              
          

            
            
            
            <div className='HeaderPlusArrowPriceColor'>
              <h3 className='titleFilterscolor'>Brand</h3>
              <ChevronRight20Filled className='arrowIconColor'/>
            </div>
            <hr/>
          <div className='HeaderPlusArrowPriceColor'>
              <h3 className='titleFilterscolor'>Size</h3>
              <ChevronRight20Filled className='arrowIconColor'/>
            </div>
            <hr/>


        

        <div className='btnContainerColor'>
       
        <button className='btnFiltersColorOpt'> SEE PRODUCTS </button>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Filterscolor
