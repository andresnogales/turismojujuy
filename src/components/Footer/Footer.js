import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import classes from "./Footer.module.css";
import FooterItem from "./FooterItem";

const Footer = () => {

  const { language, setLanguage } = useContext(LanguageContext);

  const footerLeft = {
    es: {
      title: "LIBRO DE RECLAMOS, SUGERENCIAS Y FELICITACIONES",
      content: "Su opinión es importante para nosotros.",
      btnLabel: "Click aquí"
    },
    en: {
      title: "BOOK OF COMPLAINTS, SUGGESTIONS AND CONGRATULATIONS",
      content: "Your opinion is important for us.",
      btnLabel: "Click here"
    }
  }

  const footerRight= {
    es: {
      title: "Encuesta de Satisfacción por Atención en OIT",
      content: "Ayudanos a mejorar respondiendo nuestra encuesta.",
      btnLabel: "Click aquí"
    },
    en: {
      title: "Satisfaction Survey for Attention in OIT",
      content: "Help us improve by answering our survey.",
      btnLabel: "Click here"
    }
  }

  const footerRightEnglish = {
    
  }

  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-widgets"]}>
        <div className={classes["footer-area"]}>
          {
            <FooterItem title={footerLeft[language].title} content={footerLeft[language].content} btnLabel={footerLeft[language].btnLabel} link=""/>
          }
        </div>
        <div className={classes["footer-area"]}>
        {
          <FooterItem title={footerRight[language].title} content={footerRight[language].content} btnLabel={footerRight[language].btnLabel} link=""/>
          }
        </div>
      </div>
      <div className={classes["site-footer"]}>
        <p>
          © 2022 Ministerio de Cultura y Turismo de Jujuy | Andrés Nogales
          developer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
