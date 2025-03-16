import { useEffect, useState } from "react"
import "./Navegacion.css"
import logo from "../../../public/dreps_logo.png"

export default function Navegacion() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 801) {
            setIsSmallScreen(true);
        }
    }, []);

    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="container">
                        <BotonMenu
                            isSearching={isSearching}
                            isOpen={isOpen}
                            setIsSearching={() => setIsSearching(!isSearching)}
                            setIsOpen={() => setIsOpen(!isOpen)}
                        />
                        <ItemsNavegacion
                            isSmallScreen={isSmallScreen}
                            isSearching={isSearching}
                            setIsSearching={() => setIsSearching(!isSearching)}
                        />
                    </div>
                    <NavegacionMobile isOpen={isOpen} />
                </nav>
            </header>
        </>
    )
}

function LogoNavegacion({ isSmallScreen }) {
    if (!isSmallScreen) {
        return (<div className="logo"><img src={logo} /></div>)
    }
}

function ItemsNavegacion({ isSearching, isSmallScreen, setIsSearching }) {
    if (!isSearching) {
        return (
            <>
                <LogoNavegacion isSmallScreen={false} />
                <div className="nav-links">
                    <a href="#inicio">Inicio</a>
                    <a href="#categorias">Categorías</a>
                    <a href="#ofertas">Ofertas</a>
                    <a href="#contacto">Contacto</a>
                </div>
                <div className="nav-buttons">
                    <button id="search" className="nav-button" onClick={setIsSearching}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" >
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>
                    </button>
                    <button id="profile" className="nav-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" >
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <LogoNavegacion isSmallScreen={isSmallScreen} />
            <div className="search">
                <input className="input-text" placeholder="Buscar en Dreps.com"></input>
                <button className="button-cancelar" onClick={setIsSearching}>Cancelar</button>
            </div>
        </>
    )
}

function BotonMenu({ isSearching, isOpen, setIsSearching, setIsOpen }) {
    if (isSearching) {
        return (
            <button className="button-menu-mobile" onClick={setIsSearching}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M5 12l14 0" />
                    <path d="M5 12l6 6" />
                    <path d="M5 12l6 -6" />
                </svg>
            </button>
        )
    }

    return (
        <button className="button-menu-mobile" onClick={setIsOpen}>
            {isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            }
        </button>
    )
}

function NavegacionMobile({ isOpen }) {
    if (isOpen) {
        return (
            <div className="nav-mobile">
                <a href="#inicio">Inicio</a>
                <a href="#categorias">Categorías</a>
                <a href="#ofertas">Ofertas</a>
                <a href="#contacto">Contacto</a>
            </div>
        )
    }
}