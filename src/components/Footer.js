// import logo from "./assets/Item_Logo_footer.jpg"
import instagram_logo from "./assets/instagram-logo.svg"
import facebook_logo from "./assets/facebook-logo.svg"
import twitter_logo from "./assets/twitter-logo.svg"
import linkedin_logo from "./assets/linkedin-logo.svg"
import youtube_logo from "./assets/youtube-logo.svg"
import turtles_logo from "./assets/logo_turtles.jpg"


const Footer = () => {
    return (
        <footer>
            <div className='footer__upper-part'>
                <div className='footer__short-info'>
                    <h4>Items ordered</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <img className='logo' src={turtles_logo} alt='Logo'/>
                <div className='socials'>
                    <img src={instagram_logo} alt='instagram'/>
                    <img src={facebook_logo} alt='facebook'/>
                    <img src={twitter_logo} alt='twitter'/>
                    <img src={linkedin_logo} alt='linkedin'/>
                    <img src={youtube_logo} alt='youtube'/>
                </div>    
            </div>
            <div className='line'></div>
            <div className='footer__rights'>
                <p>2020 Iot © All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer