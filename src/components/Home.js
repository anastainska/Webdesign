import Heading from "./Heading"
import MayLikeItem from "./MayLikeItem"
import { useState } from "react"

const Home = () => {
    let name = "Item"
    let infos = [`Gravida rutrum quisque non tellus orci 
            ac. A condimentum vitae sapien 
            pellentesque habitant morbi. Porttitor 
            leo a diam sollicitudin tempor`,

            `Quam lacus suspendisse faucibus 
            interdum posuere lorem ipsum dolor. 
            At tellus at urna condimentum mattis 
            das falin pellentesque.`,

            `In aliquam sem fringilla ut morbi tincidunt 
            augue interdum velit. Eget aliquet nibh 
            praesent tristique magna sit. Amet 
            justo donec enim diam vulputate ut.`]

    const getRandomInfo = () => {
        return infos[Math.round(Math.random() * 100) % 3]
    }

    const [mayLikeItems, setItems] = useState([
        {
            id: 0,
            name: name,
            info: getRandomInfo()
        },
        {
            id: 1,
            name: name,
            info: getRandomInfo()
        },
        {
            id: 2,
            name: name,
            info: getRandomInfo()
        },
        {
            id: 3,
            name: name,
            info: getRandomInfo()
        } 
    ])
    const [id, setId] = useState(4)

    const showMoreItems = () => {
        setItems([...mayLikeItems,
            {
                id: id,
                name: name,
                info: getRandomInfo()
            },
            {
                id: id + 1,
                name: name,
                info: getRandomInfo()
            },
            {
                id: id + 2,
                name: name,
                info: getRandomInfo()
            },
            {
                id: id + 3,
                name: name,
                info: getRandomInfo()
            }
        ])
        setId(id + 4)
    }

    return (
        <div className='home'>
            <Heading />
            <section className='may-like-items'>
                <h1>You may be interested</h1>
                <ul>
                    { mayLikeItems.map(item => 
                        <MayLikeItem key={item.id} name={`${item.name} ${item.id + 1}`} info={item.info}/>) }
                </ul>
                <div className='view-more'>
                    <button className='may-like-items__view-more-button' onClick={showMoreItems}>View more</button>
                </div>    
            </section>
        </div>
    )
}

export default Home