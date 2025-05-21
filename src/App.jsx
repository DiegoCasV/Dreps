import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/home/Home.jsx";
import SearchList from "./routes/search/SearchList.jsx";
import Product from "./routes/products/Product.jsx";
import Login from "./routes/login/Login.jsx";
import Cargador from "./routes/dev/Cargador.jsx";
import SearchBar from "./routes/search/SearchBar.jsx";
import './App.css';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 770);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 770);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <HashRouter>
            <AppRoutes isMobile={isMobile} />
        </HashRouter>
    );
}

function AppRoutes({ isMobile }) {
    const location = useLocation();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home isMobile={isMobile} />
                }
            />
            <Route
                path="/search"
                element={
                    <SearchList key={location.key} isMobile={isMobile} />
                }
            />
            <Route
                path="/searchbar"
                element={
                    <SearchBar />
                }
            />
            <Route
                path="/product"
                element={
                    <Product isMobile={isMobile} />
                }
            />
            <Route
                path="/login"
                element={
                    <Login />
                }
            />
            {Cargador()}
        </Routes>
    );
}

export default App;