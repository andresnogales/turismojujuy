import { useState } from "react";
import {HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { ArticleContext } from "./context/articleContext";
import { LanguageContext } from "./context/languageContext";
import { useLanguage } from "./hooks/useLanguage";
import ArticleDetails from "./pages/ArticleDetails";
import CategoryDetails from "./pages/CategoryDetails";
import Home from "./pages/Home";
import RegionDetails from "./pages/RegionDetails";

function App() {
  const [article, setArticle] = useState("");
  const articleValue = { article, setArticle };
  const [storedlanguage, setSroredLanguage] = useLanguage();
  const [language, setLanguage] = useState(storedlanguage);
  const languageValue = { language, setLanguage };

  return (
    <HashRouter>
      <LanguageContext.Provider value={languageValue}>
        <ArticleContext.Provider value={articleValue}>          
          <Routes>
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/cat/:id" element={<CategoryDetails />} />
            <Route path="/region/:id" element={<RegionDetails />} />
            <Route path="/" exact={true} element={<Home />} />
          </Routes>
        </ArticleContext.Provider>
        <Footer></Footer>
      </LanguageContext.Provider>
    </HashRouter>
  );
}

export default App;
