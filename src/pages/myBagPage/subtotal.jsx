import React from 'react';

export const Subtotal = ({ subtotal,count }) => {
  return (
    <div className="products-subTotal" style={{width:'100%'}}>
      <p className="p__products">Products: {count}</p>
      <p className="p__sub-total">SUB-TOTAL: {subtotal} DZD</p>
    </div>
  );
};

