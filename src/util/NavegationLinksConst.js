const ITEMS_MUJER = [
    { categoria: "Ropa", subCategoria: ["Camisas", "Pantalones", "Zapatos"], genero: "Femenino" },
    { categoria: "Bolsos", subCategoria: ["Bolsos de Hombro", "Minibolsos", "Maletas"], genero: "Femenino" }
];
const ITEMS_HOMBRE = [
    { categoria: "Ropa", subCategoria: ["Camisas", "Pantalones", "Zapatos"], genero: "Masculino" },
    { categoria: "Bolsos", subCategoria: ["Bolsos Mensajeros", "Riñoneras", "Maletas"], genero: "Masculino" }
];
const ITEMS_ACCESORIOS = [
    { categoria: "Joyería", subCategoria: ["Anillos y Pulseras", "Collares", "Pendientes"], genero: "Unisex" },
    { categoria: "Objetos personales", subCategoria: ["Sombreros", "Cinturones", "Bujandas"], genero: "Unisex" }
];
const ITEMS_COSMETICOS = [
    { categoria: "Fragancias", subCategoria: ["Dior", "Chanel"], genero: "Unisex" },
    { categoria: "Belleza", subCategoria: ["Barra de Labios", "Bálsamos Labiales"], genero: "Unisex" },
    { categoria: "Rostro", subCategoria: ["Cuidado Facial", "Cuidado Ocular"], genero: "Unisex" }
];

export const ITEMS_MAP = {
    0: ITEMS_MUJER,
    1: ITEMS_HOMBRE,
    2: ITEMS_ACCESORIOS,
    3: ITEMS_COSMETICOS
};

export const NAV_LINKS = [
    { id: "mujer", label: "Mujer" },
    { id: "hombre", label: "Hombre" },
    { id: "accesorios", label: "Accesorios" },
    { id: "cosmeticos", label: "Cosméticos" }
];