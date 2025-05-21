import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, ITEMS_MAP } from "../../util/NavegationLinksConst.js";
import UseLockBodyScroll from "../../util/UseLockBodyScroll.jsx";
import img_item_1 from "../../assets/img_items_1.webp";
import img_item_2 from "../../assets/img_items_2.webp";
import img_item_3 from "../../assets/img_items_3.avif";
import img_item_4 from "../../assets/img_items_4.avif";
import "./Menu.css";

export default function CategoryMenu({ isMobile, menuOpen, setMenuOpen }) {
    const [selectedLink, setSelectedLink] = useState(null);
    UseLockBodyScroll(menuOpen);

    /*useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (menuOpen) {
                event.preventDefault();
                setSelectedLink(null);
                setMenuOpen(false);
                window.history.pushState(null, "", window.location.href);
            }
        };

        window.addEventListener('popstate', handleBeforeUnload);
        window.history.pushState(null, "", window.location.href);

        return () => { window.removeEventListener('popstate', handleBeforeUnload); }
    }, [menuOpen]);*/

    const handleCloseMenu = () => {
        setSelectedLink(null);
        setMenuOpen(false);
    }

    return (
        <>
            <div className={`categorymenu ${menuOpen ? "categorymenu-open" : ""}`}>
                <div className="categorymenu_container">
                    {(selectedLink === null || !isMobile) ?
                        <>
                            <CloseMenu
                                closeMenu={handleCloseMenu}
                            />
                            <NavigationLinks
                                isMobile={isMobile}
                                selectedLink={selectedLink}
                                setSelectedLink={setSelectedLink}
                            />
                        </>
                        :
                        <>
                            <GoBack
                                selectedLink={selectedLink}
                                setSelectedLink={setSelectedLink}
                            />
                            <ContainerDetails
                                selectedLink={selectedLink}
                                handleCloseMenu={handleCloseMenu}
                            />
                        </>
                    }
                </div>
            </div>
            {!isMobile &&
                <>
                    <div className={`categorymenu_details-desktop ${selectedLink !== null ? "categorymenu_details-desktop--active" : ""}`}>
                        <ContainerDetails
                            selectedLink={selectedLink}
                            handleCloseMenu={handleCloseMenu}
                        />
                    </div>
                    <OverLay
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                        setSelectedLink={setSelectedLink}
                    />
                </>
            }
        </>
    );
}

function OverLay({ menuOpen, setMenuOpen, setSelectedLink }) {
    return (
        <div
            className={`categorymenu_overlay ${menuOpen ? "categorymenu_overlay-active" : ""}`}
            onClick={() => {
                setSelectedLink(null);
                setMenuOpen(false);
            }}
        />
    );
}

function CloseMenu({ closeMenu }) {
    return (
        <div
            className="categorymenu_topside"
            onClick={closeMenu}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24} height={24}
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round"
            >
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>
            <p>Cerrar</p>
        </div>
    );
}

function GoBack({ selectedLink, setSelectedLink }) {
    return (
        <div
            className="categorymenu_topside"
            onClick={() => setSelectedLink(null)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24} height={24}
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round"
            >
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
            </svg>
            <p>{NAV_LINKS[selectedLink].label}</p>
        </div>
    );
}

function NavigationLinks({ isMobile, selectedLink, setSelectedLink }) {
    return (
        <div className="categorymenu_containerlinksitems">
            {NAV_LINKS.map(({ id, label }, index) => (
                <div
                    key={id}
                    className="categorymenu_linksitems"
                    onClick={() => setSelectedLink(index)}
                >
                    <p
                        className={
                            `categorymenu_linksitem ${selectedLink === null
                                ? ""
                                : selectedLink === index
                                    ? "categorymenu_linksitem-active"
                                    : "categorymenu_linksitem-desactive"}`
                        }
                    >
                        {label}
                    </p>
                    <svg
                        className={`categorymenu_svgitem ${(isMobile || selectedLink === index) ? "categorymenu_svgitem-active" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width={24} height={24}
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth={2}
                        strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </div>
            ))}
        </div>
    );
}

const IMG_ITEMS = [
    img_item_1,
    img_item_2,
    img_item_3,
    img_item_4
]

function ContainerDetails({ selectedLink, handleCloseMenu }) {
    const items = ITEMS_MAP[selectedLink] || [];
    if (items.length === 0) return <></>

    return (
        <div className="categorymenu_containerdetails">
            <img
                className="categorymenu_detailsimg"
                src={IMG_ITEMS[selectedLink]}
            />
            {items.map((item) => (
                <div
                    key={item.categoria}
                    className="categorymenu_detailsitems"
                >
                    <h4>{item.categoria}</h4>
                    <ul>
                        {item.subCategoria.map((subItem) => (
                            <li key={subItem}>
                                <Link
                                    onClick={handleCloseMenu}
                                    to={`/search?categoria=${encodeURIComponent(item.categoria)}&subcategoria=${encodeURIComponent(subItem)}&genero=${encodeURIComponent(item.genero)}`}
                                >
                                    {subItem}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}