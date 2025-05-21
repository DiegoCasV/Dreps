import { useNavigate } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
    const navigate = useNavigate();

    return (
        <h1 
            className="logo_dreps"
            onClick={() => navigate("/")}
        >
            Dreps
        </h1>
    );
}