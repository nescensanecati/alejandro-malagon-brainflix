import './Header.scss'
import logo from '../assets/images/BrainFlix-logo.svg'

function Header() {
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
                    <form id="search__form">
                        <input type="text" placeholder="Search.." name="search" />
                    </form>
                    <button className='header__button' type="upload">UPLOAD</button>
                    <div className="header__avatar"></div>
                    </section>
            </header>
        </>
    )
}

export default Header