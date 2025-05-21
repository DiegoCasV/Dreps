import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import "./BasicNavigation.css";

export default function BasicNavigation() {
    const navigate = useNavigate();

    return (
        <header>
            <nav className="basicnavbar">
                <div className="navbar_container">
                    <div className="navbar_logo"><Logo /></div>
                    <div className="basicnavbar_close">
                        <svg
                            onClick={() => navigate(-1)}
                            xmlns="http://www.w3.org/2000/svg"
                            width={24} height={24}
                            viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth={2}
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
    );
}