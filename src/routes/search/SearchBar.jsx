import BasicNavigation from "../../components/navegacion/BasicNavigation";
import SearchInput from "../../components/searchinput/SearchInput";
import HomeCategories from "../home/HomeCategories";
import "./SearchBar.css";

export default function SearchBar() {
    return (
        <>
            <BasicNavigation />
            <div className="searchbar">
                <div className="searchbar_container">
                    <SearchInput setOnFocus={() => { }} />
                </div>
            </div>
            <HomeCategories />
        </>
    );
}