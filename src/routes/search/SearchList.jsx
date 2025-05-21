import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from '../../components/navegacion/Navigation.jsx';
import CategoryProductsUseFetch from "../../data/CategoryProductsUseFetch.jsx";
import SearchProductsUseFetch from "../../data/SearchProductsUseFetch.jsx";
import ProductsSection from "../../components/productos/ProductsSection.jsx";
import Loading from "../../components/loading/Loading.jsx";
import "./SearchList.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function SearchList({ isMobile }) {
    const query = useQuery();
    const categoria = query.get("categoria");
    const subcategoria = query.get("subcategoria");
    const genero = query.get("genero");
    const buscar = query.get("searchProduct");
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(prev => prev + 1);
    };

    const productsFetch = categoria === "none"
        ? SearchProductsUseFetch(contador, buscar)
        : CategoryProductsUseFetch(contador, subcategoria, genero);

    return (
        <>
            <Navigation 
                isMobile={isMobile}
                activeContract={true}
            />
            <div className="searchproducts">
                {productsFetch.isLoading &&
                    <Loading />
                }
                {!productsFetch.isLoading &&
                    <ProductsSection
                        productsFetch={productsFetch}
                        title={categoria === "none" ? `${buscar}` : `${subcategoria}`}
                        bannerImgUrl=""
                        isHome={false}
                        limiteInferior={0}
                        limiteSuperior={200}
                        incrementar={incrementar}
                    />
                }
            </div>
        </>
    );
}