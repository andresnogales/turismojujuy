import LoginForm from "../Login/LoginForm";
import Widget from "../Widget/Widget";
import classes from "./Sidebar.module.css";
const Sidebar = () => {

  const handleClick = () => {
    console.log("Click event");
  }

  return (
    <aside className={classes["sidebar"]}>
      <Widget 
      title={"Consultas e Informes"}
      content={"Contacte con el personal de informes de la Secretaría de Turismo de Jujuy para esclarecer cualquier cualquier duda."} 
      icon={"http://c2210489.ferozo.com/wp-content/uploads/Info.png"}
      btnLabel={"Ir a la página"}
      onClick={handleClick}/>

    <Widget 
      title={"Descargas"}
      content={"Descarga, folletos, mapas y wallpapers de Jujuy."} 
      btnLabel={"Ir a la descargas"}
      onClick={handleClick}/>

    <LoginForm />
    </aside>
  );
};

export default Sidebar;
