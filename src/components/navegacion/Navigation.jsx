import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import SearchInput from "../searchinput/SearchInput";
import CategoryMenu from "../menu/Menu";
import "./Navigation.css";

export default function Navigation({ isMobile, activeContract }) {
    const [searchStyle, setSearchStyle] = useState({ transform: "translateY(0)" });
    const [hideSearch, setHideSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [onFocus, setOnFocus] = useState(false);
    const navbarRef = useRef(null);
    const headSpacerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResizeHeight = () => {
            if (!isMobile && navbarRef.current && headSpacerRef.current) {
                const altura = navbarRef.current.offsetHeight;
                headSpacerRef.current.style.height = `${altura}px`;
            }
            if (isMobile) headSpacerRef.current.style.height = `114px`;
        }

        handleResizeHeight();
        window.addEventListener("resize", handleResizeHeight);
        return () => { window.removeEventListener("resize", handleResizeHeight); }
    }, [isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                let valueScrollY = window.scrollY - 1;
                if (valueScrollY > 50) {
                    valueScrollY = 50;
                    setHideSearch(true);
                } else {
                    setHideSearch(false);
                }
                setSearchStyle({ transform: `translateY(-${valueScrollY * 2}%)` });
            } else {
                setSearchStyle({ transform: "translateY(0)" });
                setHideSearch(false);
            }
        }

        if (isMobile && activeContract) window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll); }
    }, [isMobile]);

    return (
        <>
            <header>
                <nav className="navbar" ref={navbarRef} style={menuOpen && !isMobile ? {paddingRight: "15px"} : {}}>
                    <div className="navbar_container">
                        <LeftButtons
                            hideSearch={onFocus ? false : hideSearch}
                            setHideSearch={setHideSearch}
                            setSearchStyle={setSearchStyle}
                            setMenuOpen={setMenuOpen}
                            isMobile={isMobile}
                            navigateToSearch={() => navigate("/searchbar")}
                        />
                        <div className="navbar_logo"><Logo /></div>
                        <RightButtons
                            isMobile={isMobile}
                            navigateToLogin={() => navigate("/login")}
                        />
                    </div>
                    {isMobile &&
                        <MobileSearch
                            searchStyle={searchStyle}
                            onFocus={onFocus}
                            setOnFocus={setOnFocus}
                        />
                    }
                </nav>
                <div className="headerspace" ref={headSpacerRef} />
            </header>
            <CategoryMenu
                isMobile={isMobile}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
        </>
    );
}

function LeftButtons({
    hideSearch,
    setHideSearch,
    setSearchStyle,
    setMenuOpen,
    isMobile,
    navigateToSearch
}) {
    return (
        <div className="navbar_leftbuttons">
            <div
                className="navbar_menubutton"
                onClick={() => setMenuOpen(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24} height={24}
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth={2}
                    strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
                {!isMobile &&
                    <p>Menú</p>
                }
            </div>
            {(isMobile && hideSearch) &&
                <svg
                    className="navbar_mobilesearchicon-hide"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20} height={20}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => {
                        setHideSearch(false);
                        setSearchStyle({ transform: "translateY(0)" });
                    }}
                >
                    <path d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" />
                </svg>
            }
            {!isMobile &&
                <div 
                    className="navbar_desktopsearchcontainer"
                    onClick={navigateToSearch}
                >
                    <svg
                        className="navbar_desktopsearchicon"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20} height={20}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" />
                    </svg>
                    <p>Buscar</p>
                </div>
            }
        </div>
    );
}

function RightButtons({ isMobile, navigateToLogin }) {
    return (
        <div className="navbar_rightbuttons">
            <div 
                className="navbar_login"
                onClick={navigateToLogin}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24} height={24}
                    viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth={1.5}
                    strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                {!isMobile &&
                    <p>Cuenta</p>
                }
            </div>
        </div>
    );
}

function MobileSearch({
    searchStyle,
    onFocus,
    setOnFocus
}) {
    return (
        <div
            className="navbar_mobilesearchcontainer"
            style={onFocus ? { transform: "translateY(0)" } : searchStyle}
        >
            <SearchInput setOnFocus={setOnFocus} />
        </div>
    );
}