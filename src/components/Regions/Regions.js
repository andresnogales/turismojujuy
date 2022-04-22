import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import classes from "./Regions.module.css";
import RegionList from "./RegionsList";
const Regions = () => {

  const { language, setLanguage } = useContext(LanguageContext);

  const sectionTitle = {
    es: "Regiones de Jujuy",
    en: "Regions of Jujuy"
  }

  const sectionContent = {
    es: `El relieve de la provincia de Jujuy se divide en cuatro regiones bien definidas Puna, Quebrada, Valles y Yungas, cada una de ellas bien diferenciada por su clima, biomas y actividades económicas.\n
    El resultando es una riqueza cultural y paisajística con características propias, que el turista ávido de experiencias puede encontrar recorriendo pocos kilómetros de distancia.`,
    en: `The relief of the province of Jujuy is divided into four well-defined regions Puna, Quebrada, Valles and Yungas, each one of them well differentiated by its climate, biomes and economic activities.\n
    The result is a cultural and landscape richness with its own characteristics, which tourists eager for experiences can find just a few kilometers away.`,
  }

  return (
    <section className={classes["section"]}>     
      <div className={classes["section-content"]}>        
        <div className={classes["section-text"]}>
          <h3 className={classes["section-title"]}>{sectionTitle[language]}</h3>
          <p>
            {sectionContent[language]}
          </p>
          <p>
            <div className={classes["region-grid"]}>
                <div className={classes["region-name"]} style={{ gridArea: " 1 / 1 / 2 / 2"}}> 
                  <div className={classes["region-square"]} style={{backgroundColor: "#f7d5b3"}}></div>
                  <p>Puna</p>
                </div>
                <div className={classes["region-name"]} style={{ gridArea: " 1 / 2 / 2 / 3"}}> 
                  <div className={classes["region-square"]} style={{backgroundColor: "#e197b4"}}></div>
                  <p>Quebrada</p>
                </div>
                <div className={classes["region-name"]} style={{ gridArea: "1 / 3 / 2 / 4"}}> 
                  <div className={classes["region-square"]} style={{backgroundColor: "#b9f8f8"}}></div>
                  <p>Valles</p>
                </div>
                <div className={classes["region-name"]} style={{ gridArea: " 1 / 4 / 2 / 5"}}> 
                  <div className={classes["region-square"]} style={{backgroundColor: "#bffaa1"}}></div>
                  <p>Yungas</p>
                </div>
            </div>   
          </p>
        </div>
        <iframe className={classes["map"]} src="https://www.google.com.ar/maps/d/embed?mid=1WbCeuLtPgaIoTMBbMBepUsitzrJnUsHE&ehbc=2E312F" width="640" height="480"></iframe>
      </div>
      <RegionList />
    </section>
  );
};

export default Regions;
