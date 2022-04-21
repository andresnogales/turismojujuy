import Categories from "../components/Categories/Categories";
import Hero from "../assets/hero.png"
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Regions from "../components/Regions/Regions";
import SearchButton from "../components/Search/SearchButton";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header picture={Hero} />   
      <SearchButton />
      <div className="wrapper">      
        <main className="main">
          <h1 className="site-description">
            Conéctate con lo auténtico, con la energía pura de una tierra
            extraordinaria.
          </h1>
          <Categories />
          <Regions />
        </main>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
