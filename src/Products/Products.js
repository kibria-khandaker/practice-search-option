import React from 'react';

const Products = ({ paintingData }) => {
    // const {name,img,bullet,capacity,action,price}=gunData;
    const { id, name, img, category, seller, shipping, price } = paintingData;
    return (
        <div className='productCard_items'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Product Id : <b>{id}</b></p>
            <p>Seller : <b>{seller}</b></p>
            <p>Category : {category}</p>
            <p>Shipping : {shipping}</p>
            <p>Price : <b>{price}$</b></p>
        </div>
    );
};
export default Products;

// toLowerCase() na dile Old likhle ashe, But old ashe na. = Ok Done
// toLowerCase() dile Old likhle ase na, all small leater e likhte hoy = Ok Done
// first reload e empty thake. = Ok Done

// search box e jakichoi likhi o ta spraye dile all items cole ashe ... emon ki boxe space dileo all show hoye jay

