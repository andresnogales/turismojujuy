
import { useState } from "react";
import { CgUser, CgLock } from "react-icons/cg";
import Button from "../Button/Button";
import classes from "./LoginForm.module.css";
import AuthService from "../../services/auth-service";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const getUsername = (event) => {
        setUsername(event.target.value);
    }

    const getPassword = (event) => {
        setPassword(event.target.value);
    }

    const validateFields = () => {
        if(username.length >= 4 && password.length >= 4){
            console.log("Valid");
            handleLogin();
        }
        else setMessage("Error: Usuario o contraseña vacios");        
    }

    const handleLogin = async(e) => {
        try {
            await AuthService.login(username, password).then(() => {
                console.log('login success');      
                setMessage("");
                setUsername("");
                setPassword("");
                window.scrollTo(0, 0);            
              },
              (error) => {
                console.log(error);
                setMessage("Error: Usuario o contraseña incorrectos");
              }
            );
          } catch (err) {
            console.log(err);
            setMessage(err);
          }
    }

    return (
        <div className={classes["form"]}>
            <div className={classes["title"]}>
                <h3>Iniciar Sesion</h3>
            </div>
            <div className={classes["content"]}>
                <p>
                    <CgUser className={classes["icon"]} size={20}/>
                    <input value={username} onChange={getUsername} className={classes["input"]} type="text" placeholder="Nombre de usuario"/>
                </p>
                <p>
                    <CgLock className={classes["icon"]} size={20}/>
                    <input value={password} onChange={getPassword} className={classes["input"]} type="password" placeholder="Contraseña"/>
                </p>
            </div>
            {message && <p className={classes["message"]}>{message}</p>}
            <Button label={"Acceder"} onClick={validateFields}/>
        </div>
    );
};

export default LoginForm;
