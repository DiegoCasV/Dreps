const API_URL = import.meta.env.VITE_API_URL_REGISTER_USER;

export default async function RegisterUseFetch(nombre, email, password, navigateToLogin) {
    if (nombre === "" || email === "" || password === "") return;
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre: nombre, email: email, rol: "cliente", contrasena: password })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            alert("Error al registrar el usuario");
            console.error(`Error-RegisterApi: ${error}`);
        })
        .finally(() => {
            alert("Usuario Registrado");
            navigateToLogin();
        });
}