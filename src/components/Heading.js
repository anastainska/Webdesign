import React from 'react'
import items_image from "./assets/turtles.jpg" 

const Heading = () => {
    return (
        <section className='heading'>
            <img className='heading__image' src={items_image} alt='items'/>
            <div className='heading__info'>
                <h2>Items Ordered</h2>
                <p>
                    Maecenas pharetra convallis 
                    posuere morbi leo urna. Justo 
                    nec ultrices dui sapien eget mi. 
                    In iaculis nunc sed augue lacus 
                    viverra vitae congue eu.
                </p>
            </div>    
        </section>
    )
}

export default Heading