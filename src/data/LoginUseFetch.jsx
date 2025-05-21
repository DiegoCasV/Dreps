const API_URL = import.meta.env.VITE_API_URL_LOGIN_USER;

export default async function LoginUseFetch(email, password, deleteCampos) {
    if (email === "" || password === "") return;

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    })
        .then((response) => {
            if(response.ok) {
                alert("Sesión Iniciada");
                deleteCampos();
            } else {
                alert("Error al iniciar sesión, credenciales incorrectas");
            }
        })
        .catch((error) => {
            console.error(`Error-LoginApi: ${error}`);
        });
}