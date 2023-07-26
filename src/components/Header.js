import './Header.scss'
import { useMediaQuery } from 'react-responsive'
import logo from '../assets/images/BrainFlix-logo.svg'


function Header() {
    const isMobile = useMediaQuery({ query: '(max-width: 767px' })
    const isTablet = useMediaQuery({ query: '(min-width: 768px' })
    return (
        <>
            <header className="header">
                <section className='header__left'><a href="index.html" className="header__a"
                ><img
                        className="header__logo"
                        src={logo}
                        alt="BrainFlix logo"
                    /></a></section>
                <section className='header__right'>
                    <form id="header__search-form">
                        <input className='header__input' type="text" placeholder="Search.." name="search" />
                        {isMobile && <div className="header__avatar"></div>}
                    </form>
                    <button className='header__button' type="upload"><picture></picture>UPLOAD</button>
                    {isTablet && <div className="header__avatar"></div>}
                </section>
            </header>
        </>
    )
}

export default Header