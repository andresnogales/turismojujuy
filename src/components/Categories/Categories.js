import { Link } from "react-router-dom";

import classes from "./Categories.module.css";
import { categoriesList } from "../../data/categories";

import Category from "./Category";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

const Categories = (props) => {

  const { language, setLanguage } = useContext(LanguageContext);

  const sectionTitle = {
    es: "Qué hacer en Jujuy",
    en: "What to do in Jujuy"
  }

  return (
    <section>
      <h3 className={classes["section-title"]}>{sectionTitle[language]}</h3>

      <div className={classes.container}>
        {categoriesList.map((category) => {
          return (
            <Link
              className={classes["category-link"]}
              to={"/cat/" + category.id}
              key={category.id}
            >
              <Category
                thumbnail={category.thumbnail}
                picture={category.picture}
                title={category.title}
                key={category.id}
                id={category.id}
              ></Category>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
