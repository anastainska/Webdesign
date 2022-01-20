import { NavLink } from "react-router-dom"
import turtles_logo from "./assets/logo_turtles.jpg"
const Header = () => {
    return (
        <header>
            <img className='logo' src={turtles_logo} alt='Logo'/>
            <nav className='header__nav'>
                <div className='header__nav-link'><NavLink exact to='/'>Home</NavLink></div>
                <div className='header__nav-link'><NavLink to='/catalog'>Catalog</NavLink></div>
                <div className='header__nav-link'><NavLink to='/item'>Item</NavLink></div>
            </nav>
        </header>
    )
}

export default Header