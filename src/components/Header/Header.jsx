import React from 'react';
import Product from './Product/Product';
// import s from '../Header/Header.module.css'

const listProduct = [
    { name: 'roll1', id: '1', price: '100',img:'../product-menu_1.jpg' },
    { name: 'roll2', id: '2', price: '200',img:'../product-menu_2.jpg' },
    { name: 'roll3', id: '3', price: '300',img:'../product-menu_1.jpg' },
    { name: 'roll4', id: '4', price: '400',img:'../product-menu_2.jpg' },

]

const Header = () => {

    let createListProduct = listProduct.map(e => (
        <Product nameProdukt={e.name} priceProduct={e.price} img = {e.img}/>
    ))


    return (
        <div>
            <div className="container">
                <div className="menu">
                    {createListProduct}
                </div>
            </div>
        </div>
    )
}

export default Header;