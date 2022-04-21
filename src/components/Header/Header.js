import classes from "./Header.module.css";
import Hero from "../../assets/hero.png";
import { ImSearch } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { useContext, useEffect } from "react";
import { ArticleContext } from "../../context/articleContext";
import { useNavigate, useLocation } from "react-router-dom";
import { LanguageContext } from "../../context/languageContext";

const Header = (props) => {
  const { article, setArticle } = useContext(ArticleContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const articleHero = article ? article.picture : "";
  const history = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setArticle("");
    }
  }, [history]);

  return (
    <header className={classes.header}>
      {article && <h1 className={classes["hero-text"]}>{language === "es" ? article.title: article.titleEn}</h1>}
      <img src={articleHero ? articleHero : Hero} alt="Paisaje Jujuy" />
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
    </header>
  );
};

export default Header;
