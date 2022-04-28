import { useContext, useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryWithArticles } from "../actions/categoryAction";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import { LanguageContext } from "../context/languageContext";
import ArticlesList from "../components/Articles/ArticlesList";


const CategoryDetails = () => {
    const { id } = useParams();
    const { language, setLanguage } = useContext(LanguageContext);
    const [category, setCategory] = useState("");
    const [articles, setArticles] = useState([]);
    const dispatch = useDispatch();
    const categoryDb = useSelector((state) => state.categoryWithArticles);
    const { error, data } = categoryDb;

    useEffect(() => {
        async function fetchData() {
            dispatch(getCategoryWithArticles(id));
        }
        fetchData();    
        window.scrollTo(0, 0);
      }, [dispatch]);
    
    useEffect(() => {
        if(data){
            setCategory(data);
            setArticles(data.articles);
        }
    }, [data]);
    
    return (
    <div>
        <Navbar/>
        {category && <Header picture={category.picture} label={language == "es"? category.title: category.titleEn}/>}
        <ArticlesList articles={articles} error={error}/>       
    </div>);
}

export default CategoryDetails;