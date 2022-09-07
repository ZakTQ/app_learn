import React from 'react';
import { useState } from 'react';

const Product = (props) => {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(true)

    function counterMinus() {
        if (count > 1)

            return (
                setStatus(false),
                setCount(count - 1)
            )

        return (
            setStatus(true),
            setCount(0)
        )
    }

    function counterPlus() {
        if (count > 0)

            return (
                setStatus(false),
                setCount(count + 1)
            )

        return (
            setStatus(true),
            setCount(0)
        )
    }

    function onBlock() {

        if (status == false) {

            return (
                <div className="item__buttons">
                    <button className='item__buttons-minus button'
                        onClick={() => {
                            counterMinus()
                        }}
                    >-</button>
                    <span className="item__butttons-counter">
                        {count}
                    </span>
                    <button className='item__buttons-plus button'
                        onClick={() => {
                            counterPlus()
                        }}>+</button>
                </div>
            )
        }
        return (
            <div className="item__buy-now">
                <button onClick={() => {
                    return (
                        setStatus(false),
                        setCount(1)
                    )
                }}
                    className='item__buy-now-btn'>Купить</button>
            </div >
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
                    {onBlock()}
                </div>
            </div>
        </div>
    );
};

export default Product;