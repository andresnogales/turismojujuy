import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Regions from "../components/Regions/Regions";
import SearchButton from "../components/Search/SearchButton";
import Sidebar from "../components/Sidebar/Sidebar";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const Home = () => {

  const { language, setLanguage } = useContext(LanguageContext);

  const description = {
    es: "Conéctate con lo auténtico, con la energía pura de una tierra extraordinaria.",
    en: "Connect with the authentic, with the pure energy of an extraordinary land."
  }

  return (
    <div>
      <Navbar />
      <Header />   
      <SearchButton />
      <div className="wrapper">      
        <main className="main">
          <h1 className="site-description">
            {description[language]}
          </h1>
          <Categories/>
          <Regions/>
        </main>
        <Sidebar/>
      </div>
    </div>
  );
};

export default Home;
