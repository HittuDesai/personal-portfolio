import { IoLogoApple } from 'react-icons/io'

function Header () {
    const handleMouseOver = () => {
        var elem = document.getElementsByClassName("top")[0];
        elem.classList.add("topStay");
        elem = document.getElementsByClassName("mid")[0];
        elem.classList.add("midStay");
        elem = document.getElementsByClassName("bot")[0];
        elem.classList.add("botStay");
    }

    const handleMouseLeave = () => {
        var elem = document.getElementsByClassName("top")[0];
        elem.classList.remove("topStay");
        elem = document.getElementsByClassName("mid")[0];
        elem.classList.remove("midStay");
        elem = document.getElementsByClassName("bot")[0];
        elem.classList.remove("botStay");
    }

    return (
        <header>
            <div id="logo"><IoLogoApple color='#05386B' size="100%"/></div>
            <div id="hamburger">
                <div className="hamburger-line top"></div>
                <div className="hamburger-line mid"></div>
                <div className="hamburger-line bot"></div>
            </div>
            <nav onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <ul>
                    <li onClick={() => {
                        var elem = document.getElementById("home");
                        elem.scrollIntoView({"behaviour": "smooth",});
                    }}>home</li>
                    <li onClick={() => {
                        var elem = document.getElementById("project");
                        elem.scrollIntoView({"behaviour": "smooth",});
                    }}>projects</li>
                    <li onClick={() => {
                        var elem = document.getElementById("contact");
                        elem.scrollIntoView({"behaviour": "smooth",});
                    }}>contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;