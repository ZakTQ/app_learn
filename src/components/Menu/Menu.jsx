import React from 'react';
import Product from '../Header/Product/Product';

const listProduct = [
    { name: 'roll1', id: '1', price: '100', img: '../product-menu_1.jpg' },
    { name: 'roll2', id: '2', price: '200', img: '../product-menu_2.jpg' },
    { name: 'roll3', id: '3', price: '300', img: '../product-menu_1.jpg' },
    { name: 'roll4', id: '4', price: '400', img: '../product-menu_2.jpg' },
    { name: 'roll4', id: '4', price: '400', img: '../product-menu_2.jpg' },
    { name: 'roll4', id: '4', price: '400', img: '../product-menu_2.jpg' },
    { name: 'roll4', id: '4', price: '400', img: '../product-menu_2.jpg' },

]
let createListProduct = listProduct.map(e => (
    <Product nameProdukt={e.name} priceProduct={e.price} img={e.img} />
))


const Menu = () => {
    return (
        <div className="menu">
            {createListProduct}
        </div>
    );
};

export default Menu;