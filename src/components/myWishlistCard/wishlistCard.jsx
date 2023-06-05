import React, {useState} from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { ChevronRight24Filled } from '@fluentui/react-icons';
import { Delete24Regular } from '@fluentui/react-icons';



const sizes = ["S", "M", "L", "XL"];
const colors = ["Black", "White",  "Red", "Green"]
const Card = ({imageSrc , title , price , color, size, nbItems, onAddToBag}) => {
  
  const [selectedSize, setSelectedSize] = useState(size || sizes[0]);
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  
  const [selectedColor, setSelectedColor] = useState(color || colors[0]); 
  const handleColorChange = (eventcolor) => {
    setSelectedColor(eventcolor.target.value); 
  };

  const [numItems, setNumItems] = useState(1);
  const handleAddItem = () =>{
    setNumItems(numItems + 1); 
  };

  const handleRemoveItem = () => {
    if (numItems > 1) {
      setNumItems(numItems - 1);
    }
  };

  const handleAddToBagClick= () => {
    onAddToBag(selectedSize, numItems); 
  }

  
  return (
    <div className='card-container-wishlist'>
      <Delete24Regular className='deleteIcon'/>
      <div className='cardImgContainer'>
        <img src={imageSrc} alt='product image ' className='cardImage'/>
      </div>
      <div className='cardContent-btn-wrapper'>
        <div className='cardContent-wishlist'>
          <h2 className='cardTitle'>{title}</h2>
          <p className='cardPrice'>{price}</p>


          <div className='colorOfItems'>
            <Select value={selectedColor} onChange={handleColorChange} IconComponent={ChevronRight24Filled}>
              {colors.map((color) => (
                <MenuItem key={color} value={color}>{color}</MenuItem>
              ))}
            </Select>
          </div>



        <div className='cardSizeSelect'>
          <Select value={selectedSize} onChange={handleSizeChange}  IconComponent={ChevronRight24Filled} >
            {sizes.map((size) => (
              <MenuItem key={size} value={size}>{size}</MenuItem>
            ))}
          </Select>
        </div>

          <div className='numberOfItems'>
            <span className='itemsTitle'>Items</span>
            <div className='numItemsBox'>
            <IconButton onClick={handleRemoveItem}>
              <RemoveIcon/>
            </IconButton>
            {numItems}
            <IconButton onClick={handleAddItem}>
              <AddIcon />
            </IconButton>
            </div>
          </div>
          <hr className='item-line' />
        </div>
        <div>
          <button className='cardBtn' onClick={handleAddToBagClick}>ADD TO BAG</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
