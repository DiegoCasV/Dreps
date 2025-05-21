import { useEffect, useState, useRef } from "react";
import "./Loading.css";

const DOTS = ["", ".", "..", "..."];

export default function Loading() {
    const [index, setIndex] = useState(0);
    const [time, setTime] = useState(185);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % DOTS.length);

            setTime((prevTime) => {
                if (prevTime > 1) {
                    return prevTime - 1;
                } else {
                    clearInterval(intervalRef.current);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    return (
        <>
            {(time < 180) &&
                <div className="loadin_component">
                    <p>{`Cargando${DOTS[index]}`}</p>
                    <p>Esperando respuesta del servidor</p>
                    <p>{`Tiempo estimado: ${minutos}:${segundos.toString().padStart(2, "0")}`}</p>
                </div>
            }
        </>
    );
};