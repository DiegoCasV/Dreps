import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../../util/localeStorage";
import "./ProductCard.css";

export default function ProductCard({ nombre, imgUrl, precio, categoriaid }) {
    const [newPrecio, setNewPrecio] = useState("");
    const imgRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const reversed = String(precio).split("");
        let precioArray = [];

        let contador = 0;
        for (let i = reversed.length - 1; i > -1; i--) {
            if (contador === 3){
                precioArray.push(".");
                contador = 0;
            }
            precioArray.push(reversed[i]);
            contador ++;
        }

        setNewPrecio(precioArray.reverse().join(""));

        const handleResizeWidth = () => {
            if (imgRef.current) {
                const ancho = imgRef.current.offsetWidth;
                imgRef.current.style.height = `${ancho*1.1}px`;
            }
        }

        handleResizeWidth();
        window.addEventListener("resize", handleResizeWidth);
        return () => { window.removeEventListener("resize", handleResizeWidth); }
    }, []);

    return (
        <div className="productcard" onClick={() => {
            saveProduct(imgUrl);
            navigate(`/product?catid=${categoriaid}&name=${nombre}&cost=${newPrecio}`);
        }}>
            <img src={imgUrl} alt={nombre} ref={imgRef}/>
            <div className="productcard_details">
                <p className="productcard_nombre">{nombre}</p>
                <p className="productcard_precio">{`$${newPrecio}`}</p>
            </div>
        </div>
    );
}