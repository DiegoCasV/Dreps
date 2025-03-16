import { useState } from "react"
import "./Navegacion.css"
import logo from "../../../public/dreps_logo.png"
import userIcon from "../../../public/user_icon.png"
import searchIcon from "../../../public/search_icon.png"

function Navegacion() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="container">
                        <button className="button-menu-mobile" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✖" : "☰"}</button>
                        <div className="logo"><img src={logo} /></div>
                        <div className="nav-links">
                            <a href="#inicio">Inicio</a>
                            <a href="#servicios">Servicios</a>
                            <a href="#contacto">Contacto</a>
                        </div>
                        <div className="nav-buttons">
                            <button id="search" className="nav-button"><img src={searchIcon}/></button>
                            <button id="profile" className="nav-button"><img src={userIcon}/></button>
                        </div>
                    </div>
                    {
                        isOpen && (
                            <div className="nav-mobile">
                                <a href="#inicio">Inicio</a>
                                <a href="#servicios">Servicios</a>
                                <a href="#contacto">Contacto</a>
                            </div>
                        )
                    }
                </nav>
            </header>
        </>
    )
}

export default Navegacion;

/*

*/