import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import LoginForm from "../Login/LoginForm";
import Widget from "../Widget/Widget";
import classes from "./Sidebar.module.css";


const Sidebar = () => {

  const { language, setLanguage } = useContext(LanguageContext);

  const widgetOne = {
    es : {
      title : "Consultas e Informes",
      content : "Contacte con el personal de informes de la Secretaría de Turismo de Jujuy para esclarecer cualquier cualquier duda.",
      btnLabel : "Ir a la página"
    },
    en : {
      title : "Inquiries and Reports",
      content : "Contact the information staff of the Jujuy Tourism Secretariat to clarify any doubts.",
      btnLabel : "Go to the page"
    }
  };

  const widgetTwo = {
    es : {
      title : "Descargas",
      content : "Descarga, folletos, mapas y wallpapers de Jujuy.",
      btnLabel : "Ir a la página"
    },
    en : {
      title : "Downloads",
      content : "Download brochures, maps and wallpapers of Jujuy.",
      btnLabel : "Go to the page"
    }
  };
  

  const handleClick = () => {
    console.log("Click event");
  }

  return (
  
    <aside className={classes["sidebar"]}>

      <Widget 
      title={widgetOne[language].title}
      content={widgetOne[language].content} 
      icon={"http://c2210489.ferozo.com/wp-content/uploads/Info.png"}
      btnLabel={widgetOne[language].btnLabel}
      onClick={handleClick}/>

    <Widget 
      title={widgetTwo[language].title}
      content={widgetTwo[language].content}
      btnLabel={widgetTwo[language].btnLabel}
      onClick={handleClick}/>

    <LoginForm />
    </aside>
  );
};

export default Sidebar;
