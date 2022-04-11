import React from 'react';

const SearchProducts = ({ paintingData }) => {
    const { name, img, category, seller, shipping, price } = paintingData;
    return (
        <div className='productCard_items'>
            <img src={img} alt="" />
            <h3>{name} </h3>
            <p>Price : <b>{price}$</b></p>
        </div>
    );
};
export default SearchProducts;