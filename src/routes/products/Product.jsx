import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getProduct } from "../../util/localeStorage.js";
import Navigation from '../../components/navegacion/Navigation.jsx';
import "./Product.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const tallaRopa = ["XS", "S", "M", "L", "XL"];
const tallaPantalones = ["26", "28", "30", "32", "34", "36", "38"];
const tallaZapatos = ["34", "36", "38", "40", "42", "44", "46"];
const tallaBolsos = ["Pequeño", "Mediano", "Grande"];

const nombreTallaLabels = ["Talla", "Tamaño"];
const selectTallalabels = ["Selecciona una Talla", "Selecciona un Tamaño"];

export default function Product({ isMobile }) {
    const query = useQuery();
    const nombre = query.get("name");
    const precio = query.get("cost");
    const catid = query.get("catid");
    const imgUrl = getProduct();
    const [selectedTalla, setSelectedTalla] = useState("");

    let tallas = [];
    let nombreTalla = "";
    let selectTallalabel = "";

    switch (catid) {
        case "1":
            tallas = tallaRopa;
            nombreTalla = nombreTallaLabels[0];
            selectTallalabel = selectTallalabels[0];
            break;
        case "3":
        case "4":
            tallas = tallaPantalones;
            nombreTalla = nombreTallaLabels[0];
            selectTallalabel = selectTallalabels[0];
            break;
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            tallas = tallaBolsos;
            nombreTalla = nombreTallaLabels[1];
            selectTallalabel = selectTallalabels[1];
            break;
        case "12":
            tallas = tallaZapatos;
            nombreTalla = nombreTallaLabels[0];
            selectTallalabel = selectTallalabels[0];
            break;
        default:
            tallas = [];
            break;
    }

    return (
        <>
            <Navigation
                isMobile={isMobile}
                activeContract={false}
            />
            <div className="products">
                <img src={imgUrl} className="products_img"></img>
                <div className="products_details">
                    <p className="products_nombre">{nombre}</p>
                    <p className="products_precio">{`$${precio}`}</p>

                    {tallas.length > 0 &&
                        <div className="products_tallas">
                            <p className="products_tallaslabel">{nombreTalla}</p>
                            <select
                                className="products_selector"
                                value={selectedTalla}
                                onChange={(e) => setSelectedTalla(e.target.value)}
                            >
                                <option value="">{selectTallalabel}</option>
                                {tallas.map((tallaMap) => (
                                    <option key={tallaMap} value={tallaMap}>{tallaMap}</option>
                                ))}
                            </select>
                        </div>
                    }

                    <button>Añadir a la Cesta</button>
                </div>
            </div>
        </>
    );
}