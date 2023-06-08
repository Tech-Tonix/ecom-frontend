import './card.css';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export const Card = (product) => {

console.log("hhhhhhhhhhhhhhhhhh",product)

    const [shouldLoadImages, setShouldLoadImages] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        rootMargin: '0px 0px 200px 0px',
        onChange: (inView) => setShouldLoadImages(inView),
      });
      const { productId,productInventory, imgUrl, productPrice, productName, productColor } = product;

      return (
        <Link to={`/show-ProductsItems/${productId}/`} key={productId}>
          <div className='root'>
            <div
              className='upper-side'
              style={{
                backgroundImage: shouldLoadImages ? `url(${imgUrl})` : null,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
              ref={ref}
            >
              <button className='shop-btn'>Shop now</button>
            </div>
            <div className='lower-side'>
              <div className='status-price'>
                <h5 className='Status-txt'>New</h5>
                <h5 className='price-txt'>{productPrice*170} DZD</h5>
              </div>
              <h4 className='product-title'>{productName}</h4>
              <h4 className='prodoct-color-txt'>{productColor}</h4>
            </div>
          </div>
        </Link>
      );

};
