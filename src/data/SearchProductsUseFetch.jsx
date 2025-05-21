import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL_SEARCH_PRODUCTS;

export default function SearchProductsUseFetch(page, name) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        setIsLoading(true);

        fetch(`${API_URL}page=${page}&size=8&name=${name}`, { signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => {
                setProducts(prev => [...prev, ...data.content]);
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    console.error(`Error-SearchProductsApi: ${error}`);
                }
            })
            .finally(() => setIsLoading(false));

        return () => abortController.abort();
    }, [page]);

    return { products: products, isLoading: isLoading };
}
