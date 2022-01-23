import React from 'react'
import { useState } from 'react'
import turtle from "./assets/sticker_4.png"

const Item = ({ allItems, id }) => {

    const [item] = useState(allItems.find(item => item.id == id))

    return (
        <div className='item'>
            <img className="item__item-image" src={turtle} alt="Item"/>
            <div className="item-info">
                <h1 className="item-name">{item.name}</h1>
                <label className="item-price">Price: {item.price} UAH.</label>
                <label className="item-price">Total price: {item.count * item.price} UAH.</label>
                <label className="item-weight">Weight: {Math.round(item.weight * 100) / 100} kg</label>
                <label className="item-weight">Total weight: {Math.round(item.count * item.weight * 100) / 100} kg</label>
                <label className="item-type">Type: {item.type}</label>
                <label className="item-count">Amount: {item.count}</label>
                <p>
                    Quam lacus suspendisse faucibus 
                    interdum posuere lorem ipsum dolor. 
                    At tellus at urna condimentum 
                    mattis das falin pellentesque.
                </p>
            </div>
        </div>
    )
}

export default Item