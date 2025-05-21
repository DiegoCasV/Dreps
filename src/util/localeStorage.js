const HOME_PRODUCTS = "home_products";
const HOME_PRODUCTS_VERSION = "home_products_version";
const PRODUCT = "product";

export const saveHomeProductsToLocalStorage = (products) => {
    localStorage.setItem(HOME_PRODUCTS, products);
};

export const getHomeProductsFromLocalStorage = (version) => {
    if (!getHomeProductsVersion(version)) return null;
    const products = localStorage.getItem(HOME_PRODUCTS);
    return products !== null ? products : null;
};

export const clearHomeProductsFromLocalStorage = () => {
    localStorage.removeItem(HOME_PRODUCTS);
};

export const saveHomeProductsVersion = (version) => {
    localStorage.setItem(HOME_PRODUCTS_VERSION, version);
}

const getHomeProductsVersion = (version) => {
    const versionLocal = localStorage.getItem(HOME_PRODUCTS_VERSION);
    return versionLocal === version ? true : false;
}

export const saveProduct = (url) => {
    localStorage.setItem(PRODUCT, url);
}

export const getProduct = () => {
    return localStorage.getItem(PRODUCT);
}