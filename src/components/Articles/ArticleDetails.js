import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleArticle } from "../../actions/articleAction";
import { ArticleContext } from "../../context/articleContext";
import { LanguageContext } from "../../context/languageContext";
import Map from "../Map/Map";

import classes from "./ArticleDetails.module.css";

const ArticleDetails = (props) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { article, setArticle } = useContext(ArticleContext);
  const { id } = useParams();
  const dispatch = useDispatch();
  const articleData = useSelector((state) => state.articleDetails);
  const { error, data } = articleData;

  useEffect(() => {
    async function fetchData() {
      dispatch(singleArticle(id));
    }
    if (!article) fetchData();

    window.scrollTo(0, 0);
  }, [dispatch]);

  if (!article && data) setArticle(data);

  const spanishContent = (
    <div>
      <p className={classes["display-text"]}>
        {article ? article.description : data ? data.description : ""}
      </p>
    </div>
  );

  const englishContent = (
    <div>
      <p className={classes["display-text"]}>
        {article ? article.descriptionEn : data ? data.descriptionEn : ""}
      </p>
    </div>
  );
  
  return (
    <div className={classes["container"]}>
      <article className={classes["entry-content"]}>
        {language === "es" ? spanishContent : englishContent}
      </article>
      {article? <Map position={[article.latitude, article.longitude]} popup={article.address}></Map> : <p>Cargando mapa</p>} 
    </div>
  );
};

export default ArticleDetails;
