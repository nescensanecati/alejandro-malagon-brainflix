import { NavLink } from "react-router-dom";
import './Header.scss'
import { useMediaQuery } from 'react-responsive'
import logo from '../../Assets/Images/BrainFlix-logo.svg'
import uploadIcon from '../../Assets/Images/upload.svg'



function Header() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px' })
    return (
        <>
            <header className="header">
                <section className='header__left'><NavLink to="/"><img
                        className="header__logo"
                        src={logo}
                        alt="BrainFlix logo"
                    /></NavLink></section>
                <section className='header__right'>
                    <form id="header__search-form">
                        <input className='header__input' type="text" placeholder="Search.." name="search" />
                        {isMobile && <div className="header__avatar"></div>}
                    </form>
                    <NavLink className="header__navlink" to="/upload"><button className='header__button' type="upload"><img src={uploadIcon} alt="" className="header__button-img"></img>UPLOAD</button></NavLink>
                    {isTablet && <div className="header__avatar"></div>}
                </section>
            </header>
        </>
    )
}

export default Header