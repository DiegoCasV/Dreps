import Navigation from '../../components/navegacion/Navigation.jsx';
import Banner from "../../components/banner/Banner.jsx";
import ProductsSection from '../../components/productos/ProductsSection.jsx';
import HomeCategories from './HomeCategories.jsx';
import HomeProductsUseFetch from '../../data/HomeProductsUseFetch.jsx';
export default function Home({ isMobile }) {
    const homeProductsFetch = HomeProductsUseFetch()

    return (
        <>
            <Navigation 
                isMobile={isMobile}
                activeContract={true}
            />
            <Banner isMobile={isMobile} />
            <HomeCategories />
            <ProductsSection 
                productsFetch={homeProductsFetch}
                title={"Edición: Damoflage Black"}
                bannerImgUrl={"https://us.louisvuitton.com/content/dam/lv/online/picture/us/homepage/2025/PUSH2_MENS_DAMOFLAGE_US_DI3.jpg?wid=1440"}
                limiteInferior={0}
                limiteSuperior={4}
                isHome={true}
                incrementar={() => {}}
                eliminar={true}
            />
            <ProductsSection 
                productsFetch={homeProductsFetch}
                title={"Nuevos Tonos para el Verano"}
                bannerImgUrl={"https://us.louisvuitton.com/content/dam/lv/online/picture/us/homepage/2025/PUSH1_W_HANDBAGS_US_V3_DI3.jpg?wid=1440"}
                limiteInferior={4}
                limiteSuperior={9}
                isHome={true}
                incrementar={() => {}}
                eliminar={true}
            />
        </>
    );
}