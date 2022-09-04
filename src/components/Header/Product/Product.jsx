import React from 'react';
import { useState } from 'react';

const Product = (props) => {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(true)

    function runStatus() {

        return (
            setStatus(false)
        )
    }

function onBlock(status) {

    if (status == false) {

        return (
            <div className="item__buttons">
                <button className='item__buttons-plus button'
                    onClick={() => { setCount(count + 1) }}
                >+</button>
                <span className="item__butttons-counter">
                    {count}
                </span>
                <button className='item__buttons-minus button'
                    onClick={() => { setCount(count - 1) }}
                >-</button>
            </div>
        )
    }
    return (
        <div className="item__buy-now">
            <button onClick={runStatus} className='item__buy-now-btn'>Купить</button>
        </div>
    )
}

return (
    <div className="item">
        <div className="item__wpapper">
            <div className="item__img-wrapper">
                <img src={props.img} alt="" />
            </div>
            <span className="item__title">
                {props.nameProdukt}
            </span>
            <div className="item__content">
                <div className="item__content-price">
                    {props.priceProduct}р
                </div>
                {onBlock(status)}
            </div>
        </div>
    </div>
);
};

export default Product;