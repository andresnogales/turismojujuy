import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { singleRegion } from "../actions/regionAction";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./RegionDetails.module.css";
import { LanguageContext } from "../context/languageContext";
import ArticlesList from "../components/Articles/ArticlesList";


const RegionDetails = (props) => {
    const[region, setRegion] = useState("");
    const[articles, setArticles] = useState([]);
    const { language, setLanguage } = useContext(LanguageContext);
    const { id } = useParams();
    const dispatch = useDispatch();
    const regionDb = useSelector((state) => state.regionDetails);
    const { error, data } = regionDb;

    useEffect(() => {
        async function fetchData() {
            dispatch(singleRegion(id));
        }   
        fetchData();
        window.scrollTo(0, 0);             
    }, [dispatch]);

    useEffect(() => {
      if(data){
        setRegion(data); 
        setArticles(data.articles);
      }
      
    }, [data])

    const spanishContent = (
        <div>
          <p className={classes["display-text"]}>
            {region ? region.description: ""}
          </p>
        </div>
      );
    
      const englishContent = (
        <div>
          <p className={classes["display-text"]}>
            {region ? region.descriptionEn: ""}
          </p>
        </div>
      );

    return (
        <div>
            <Navbar />
            {region && <Header label={region.name} picture={region.picture}/>}
                <div className={classes["container"]}>
                    <article className={classes["display-text "]}>                        
                        {language === "es" ? spanishContent : englishContent}
                    </article>
                </div>
              <ArticlesList articles={articles} error={error}/>
        </div>
    );
}

export default RegionDetails;