import "./App.css"
import { HashRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Catalog from "./components/Catalog"
import Item from "./components/Item"
import Footer from "./components/Footer"

const App = () => {
    return (
        <HashRouter>
            <div className='container'>
                <Header />
                <div>
                    <Routes>
                    <Route exact path='/' element={<Home/>}></Route>
                    <Route path='/catalog' element={<Catalog/>}></Route>
                    <Route exact path='/item' element={<Item/>}></Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        </HashRouter>
    )
}

export default App