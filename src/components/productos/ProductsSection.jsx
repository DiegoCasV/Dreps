import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./ProductsSection.css";

export default function ProductsSection({ productsFetch, title, bannerImgUrl, limiteInferior, limiteSuperior, isHome, incrementar }) {
    const navigate = useNavigate();
    return (
        <>
            {isHome &&
                <img
                    className="productssection_imgbanner"
                    src={bannerImgUrl}
                />
            }
            <div className="productssection">
                {!productsFetch.isLoading &&
                    <>
                        <div className="productssection_nav">
                            {!isHome &&
                                <svg
                                    onClick={() => navigate(-1)}
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
                            }
                            <p className="productssection_title" style={!isHome ? { textAlign: "left", fontSize: "16px" } : {}}>{title}</p>
                        </div>
                        <div className="productssection_products">
                            {productsFetch.products && productsFetch.products.length > 0 ? (
                                productsFetch.products.slice(limiteInferior, limiteSuperior).map((
                                    { id, nombre, imagen_url, precio, categoria }
                                ) => (
                                    <ProductCard
                                        key={id}
                                        nombre={nombre}
                                        imgUrl={imagen_url}
                                        precio={precio}
                                        categoriaid={categoria.id}
                                    />
                                ))
                            ) : (
                                <p className="productssection_noproducts">No hay productos disponibles</p>
                            )}
                        </div>
                        {!isHome && (productsFetch.products && productsFetch.products.length > 0) && <button onClick={incrementar}>Ver Más</button>}
                    </>
                }
            </div>
        </>
    );
}

/*

*/