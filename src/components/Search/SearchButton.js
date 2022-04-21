import { ImSearch } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

import classes from "./SearchButton.module.css"
const SearchButton = () => {
    return (
    <div>
        <div className={classes["search-toggle"]}>
        <ImSearch /> Buscar
        </div>
        <div className={classes["search-expanded"]}>
            <div className={classes["search-expanded-button"]}>
            <div>
                <ImSearch />
                <span className={classes["search-expanded-label"]}>
                Búsqueda desplegable
                </span>
            </div>
            <div>
                <IoIosArrowDown />
            </div>
            </div>
        </div>
    </div>

  );
}

export default SearchButton;