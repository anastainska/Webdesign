import "./App.css"
import { HashRouter, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Catalog from "./components/Catalog"
import ItemPage from "./components/ItemPage"
import Footer from "./components/Footer"
import { useState } from "react"

const App = () => {

    const [allItems, setAllItems] = useState([
        {id: 1, name: "Turtle Tartaglia", price: 999, weight: 1.5, type: "Green Turtle", count: 1},
        {id: 2, name: "Turtle Zhongli", price: 1199, weight: 1.9, type: "Sea Turtle", count: 1},
        {id: 3, name: "Turtle Itto", price: 2299, weight: 2.3, type: "Flatback Turtle", count: 1},
        {id: 4, name: "Turtle Kazuha", price: 1599, weight: 1.4, type: "Red Eared Turtle", count: 1}
    ])

    const [currentlyDisplayedItems, setCurrentlyDisplayedItems] = useState(allItems)

    return (
        <HashRouter>
            <div className='container'>
                <Header />
                <div>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/catalog' render={props => <Catalog {...props}
                        allItems={allItems} currentlyDisplayedItems={currentlyDisplayedItems}
                        setAllItems={setAllItems} setCurrentlyDisplayedItems={setCurrentlyDisplayedItems}
                        />}></Route>
                    <Route path='/item/:id' render={props => <ItemPage {...props} allItems={allItems}/>}></Route>
                </div>
                <Footer />
            </div>
        </HashRouter>
    )
}

export default App