import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img_item_1 from "../../assets/bolsosMujerCategoria.webp";
import img_item_2 from "../../assets/bolsosHombreCategoria.webp";
import img_item_3 from "../../assets/zapatosMujerCategoria.webp";
import img_item_4 from "../../assets/zapatosHombreCategoria.webp";
import "./HomeCategories.css";

const IMG_ITEMS = [
    img_item_1,
    img_item_2,
    img_item_3,
    img_item_4
]

const CATEGORIES = [
    { id: "bolsosMujer", label: "Bolsos de Mujer", categoria: "Bolsos", subCategoria: "Bolsos de Hombro", genero: "Femenino" },
    { id: "bolsosHombre", label: "Bolsos de Hombre", categoria: "Bolsos", subCategoria: "Bolsos Mensajeros", genero: "Masculino" },
    { id: "zapatosMujer", label: "Zapatos de Mujer", categoria: "Ropa", subCategoria: "Zapatos", genero: "Femenino" },
    { id: "zapatosHombre", label: "Zapatos de Hombre", categoria: "Ropa", subCategoria: "Zapatos", genero: "Masculino" }
];

export default function HomeCategories() {
    return (
        <div className="homecategories">
            <p className="homecategories_title">Comprar por Categorías</p>
            <div className="homecategories_categories">
                {CATEGORIES.map(({ id, label, categoria, subCategoria, genero }, index) => (
                    <CategoryCard
                        key={id}
                        label={label}
                        index={index}
                        categoria={categoria}
                        subCategoria={subCategoria}
                        genero={genero}
                    />
                ))}
            </div>
        </div>
    );
}

function CategoryCard({ label, index, categoria, subCategoria, genero }) {
    const navigate = useNavigate();
    const categoryRef = useRef();

    useEffect(() => {
        const handleResizeWidthCategory = () => {
            if (categoryRef.current) {
                const ancho = categoryRef.current.offsetWidth;
                categoryRef.current.style.height = `${ancho}px`;
            }
        }

        handleResizeWidthCategory();
        window.addEventListener("resize", handleResizeWidthCategory);
        return () => { window.removeEventListener("resize", handleResizeWidthCategory); }
    }, []);

    return (
        <div className="homecategories_category" onClick={() => navigate(`/search?categoria=${encodeURIComponent(categoria)}&subcategoria=${encodeURIComponent(subCategoria)}&genero=${encodeURIComponent(genero)}`)}>
            <img src={IMG_ITEMS[index]} alt={label} ref={categoryRef} />
            <p className="homecategories_nombre">{label}</p>
        </div>
    );
}