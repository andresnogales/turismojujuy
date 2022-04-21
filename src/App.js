import { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { ArticleContext } from "./context/articleContext";
import { LanguageContext } from "./context/languageContext";
import { useLanguage } from "./hooks/useLanguage";
import ArticleDetails from "./pages/ArticleDetails";
import ArticlesList from "./pages/ArticlesList";
import Home from "./pages/Home";
function App() {
  const [article, setArticle] = useState("");
  const articleValue = { article, setArticle };
  const [category, setCategory] = useState();
  const categoryValue = { category, setCategory };
  const [storedlanguage, setSroredLanguage] = useLanguage();
  const [language, setLanguage] = useState(storedlanguage);
  const languageValue = { language, setLanguage };

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={languageValue}>
        <ArticleContext.Provider value={articleValue}>          
          <Routes>
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/cat/:id" element={<ArticlesList />} />
            <Route path="/" exact={true} element={<Home />} />
          </Routes>
        </ArticleContext.Provider>
        <Footer></Footer>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
