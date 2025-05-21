import { useState, useEffect } from "react";
import { getHomeProductsFromLocalStorage, saveHomeProductsToLocalStorage, saveHomeProductsVersion } from "../util/localeStorage";
const API_URL = import.meta.env.VITE_API_URL_HOME_PRODUCTS;
const VERSION = "10";

export default function HomeProductsUseFetch() {
    const [homeProducts, setHomeProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const abortController = new AbortController();
            const dataOnLocal = getHomeProductsFromLocalStorage(VERSION);
            if (dataOnLocal === null) {
                fetch(`${API_URL}page=0&size=8`, { signal: abortController.signal })
                    .then((response) => response.json())
                    .then((data) => {
                        setHomeProducts(data.content);
                        saveHomeProductsToLocalStorage(JSON.stringify(data.content));
                        saveHomeProductsVersion(VERSION);
                    })
                    .catch((error) => console.error(`Error-HomeProductsApi: ${error}`))
                    .finally(() => setIsLoading(false));
            } else {
                setHomeProducts(JSON.parse(dataOnLocal));
                setIsLoading(false);
            }
            return () => abortController.abort();
        }, 100);
    }, []);

    return { products: homeProducts, isLoading: isLoading };
}