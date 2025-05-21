import { useState } from "react";
import BasicNavigation from "../../components/navegacion/BasicNavigation";
import LoginUseFetch from "../../data/LoginUseFetch";
import RegisterUseFetch from "../../data/RegisterUseFetch";
import "./Login.css";

export default function Login() {
    const [content, setContent] = useState("Login");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [seePassword, setSeePassword] = useState(false);

    return (
        <>
            <BasicNavigation />
            <div className="login">
                {content === "Login"
                    ?
                    <IniciarSesionContent
                        navigateToRegister={() => setContent("Register")}
                        emailValue={emailValue}
                        setEmailValue={setEmailValue}
                        passwordValue={passwordValue}
                        setPasswordValue={setPasswordValue}
                        seePassword={seePassword}
                        setSeePassword={setSeePassword}
                    />
                    :
                    <RegistrarseContent
                        navigateToLogin={() => setContent("Login")}
                        emailValue={emailValue}
                        setEmailValue={setEmailValue}
                        passwordValue={passwordValue}
                        setPasswordValue={setPasswordValue}
                        seePassword={seePassword}
                        setSeePassword={setSeePassword}
                    />
                }
            </div>
        </>
    );
}

function IniciarSesionContent({
    navigateToRegister,
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    seePassword,
    setSeePassword
}) {
    const iniciarSesion = (e) => {
        e.preventDefault();
        LoginUseFetch(emailValue, passwordValue, () => {
            setEmailValue("");
            setPasswordValue("");
        });
    }

    return (
        <div className="login_container">
            <h2>Bienvenido</h2>
            <p>Inicia sesión con tu correo electrónico y tu contraseña</p>
            <form onSubmit={iniciarSesion}>
                <BasicForm
                    buttonLabel={"Iniciar Sesión"}
                    emailValue={emailValue}
                    setEmailValue={setEmailValue}
                    passwordValue={passwordValue}
                    setPasswordValue={setPasswordValue}
                    seePassword={seePassword}
                    setSeePassword={setSeePassword}
                />
            </form>
            <p
                className="login_crearcuenta"
                onClick={navigateToRegister}
            >
                Crear una Cuenta
            </p>
        </div>
    );
}

function RegistrarseContent({
    navigateToLogin,
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    seePassword,
    setSeePassword
}) {
    const [nombreValue, setNombreValue] = useState("");

    const registrarse = (e) => {
        e.preventDefault();
        RegisterUseFetch(nombreValue, emailValue, passwordValue, () => {
            navigateToLogin();
        });
    }

    return (
        <div className="login_container">
            <div className="login_registernav">
                <svg
                    onClick={navigateToLogin}
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
                <h2>Crear una cuenta Nueva</h2>
            </div>

            <form onSubmit={registrarse}>
                <label htmlFor="nombre" className="login_labelinput">Nombre</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder=""
                    className="login_input"
                    value={nombreValue}
                    onChange={(e) => setNombreValue(e.target.value)}
                    required
                />
                <BasicForm
                    buttonLabel={"Registrarse"}
                    emailValue={emailValue}
                    setEmailValue={setEmailValue}
                    passwordValue={passwordValue}
                    setPasswordValue={setPasswordValue}
                    seePassword={seePassword}
                    setSeePassword={setSeePassword}
                />
            </form>

        </div>
    );
}

function BasicForm({
    buttonLabel,
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    seePassword,
    setSeePassword
}) {
    return (
        <>
            <label htmlFor="correo" className="login_labelinput">Correo</label>
            <input
                id="correo"
                name="correo"
                type="email"
                placeholder=""
                className="login_input"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                autoComplete="email"
                required
            />
            <label htmlFor="contrasena" className="login_labelinput">Contraseña</label>
            <div className="login_passwordcontainer">
                <input
                    id="contrasena"
                    name="contrasena"
                    type={seePassword ? "text" : "password"}
                    placeholder=""
                    className="login_input"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    autoComplete="current-password"
                    required
                />
                {seePassword
                    ?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24} height={24}
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth={2}
                        strokeLinecap="round" strokeLinejoin="round"
                        className="login_iconeye"
                        onClick={() => setSeePassword(!seePassword)}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                    :
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24} height={24}
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth={2}
                        strokeLinecap="round" strokeLinejoin="round"
                        className="login_iconeye"
                        onClick={() => setSeePassword(!seePassword)}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                        <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                        <path d="M3 3l18 18" />
                    </svg>
                }
            </div>
            <button type="submit" className="login_button">{buttonLabel}</button>
        </>
    );
}