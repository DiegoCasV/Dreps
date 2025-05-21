import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchInput.css";

export default function SearchInput({ setOnFocus }) {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleSubmitSearchInput = (event) => {
        event.preventDefault();
        navigate(`/search?categoria=none&searchProduct=${encodeURIComponent(inputValue)}`);
        setInputValue("");
    };

    return (
        <>
            <form onSubmit={handleSubmitSearchInput}>
                <input
                    id="searchproducts"
                    name="searchproducts"
                    type="search"
                    placeholder="Buscar en Dreps"
                    className="searchinput"
                    onFocus={() => setOnFocus(true)}
                    onBlur={() => setOnFocus(false)}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
            <svg
                className="searchicon"
                xmlns="http://www.w3.org/2000/svg"
                width={20} height={20}
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" />
            </svg>
        </>
    );
}