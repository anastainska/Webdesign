import React from 'react'
import turtle from "./assets/sticker_4.png"

const MayLikeItem = ({ name, info}) => {
    return (
        <div className='may-like-item'>
            <img src={turtle} alt='item'/>
            <h2>{name}</h2>
            <p> {info}</p>
        </div>
    )
}

export default MayLikeItem