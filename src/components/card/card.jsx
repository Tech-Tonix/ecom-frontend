import './card.css';

export const Card = () => {
    return (
        <div className='root'>
            <div className='upper-side'>
                <img src='url' alt='img' className='product-img'/>
                <button className='shop-btn'>Shop now</button>
            </div>
            <div className='lower-side'>
                <div className='status-price'>
                    <h5 className='Status-txt'>New</h5>
                    <h5 className='price-txt'>2000 DZD</h5>
                </div>
                <h4 className='product-title'>Power T-Shirt</h4>
                <h4 className='prodoct-color-txt'>Evening blue</h4>
            </div>
        </div>
    );
};
