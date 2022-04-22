import { useState } from "react";
import { CgUser } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";
import classes from "./UserMenuButton.module.css";

const UserMenuButton = () => {

    const [user, setUser] = useState(AuthService.getCurrentUser());

    let navigate = useNavigate();

    const logoutHadler = () => {
        AuthService.logout();
        setUser("");
        navigate("/");
    }

    return(
        <>
            {user &&
            <div className={classes["user-menu"]}>
                <div className={classes["button"]}>
                <CgUser />
                </div>
                <ul className={classes["sub-menu"]}>
                    <li>
                        <span onClick={logoutHadler}>Cerrar sesión</span>
                    </li>
                </ul>
            </div>
            }
        </>
    );
}

export default UserMenuButton;