import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import RegionItem from "./RegionItem";
import classes from "./RegionsList.module.css";
const RegionsList = () => {

  const { language, setLanguage } = useContext(LanguageContext);

  const regions = [
    {
      id: 1,
      name: "Puna",
      description:{
        es: "Cielos infinitos de aire puro y extensas planicies de altura a más de 3600 msnm",
        en: "Infinite skies of pure air and extensive high plains at more than 3600 meters above sea level"
      },
      picture: require("../../assets/puna.png"),
    },
    {
      id: 2,
      name: "Quebrada",
      description:{
        es: "Mejor conocida como “de Humahuaca” es la región contigua a la anterior",
        en: "Better known as “de Humahuaca” is the region adjacent to the previous one",
      },
        
      picture: require("../../assets/quebrada.png"),
    },
    {
      id: 3,
      name: "Valles",
      description:{
        es: "Nacen al sur de la Quebrada, desde Lozano hasta el Río de Las Pavas, en El Carmen",
        en: "They are born south of the Quebrada, from Lozano to the Río de Las Pavas, in El Carmen"
      },
      picture: require("../../assets/valles.png"),
    },
    {
      id: 4,
      name: "Yungas",
      description:{
        es: "Extenso corredor biomático, son la continuación hacia el este de la Quebrada",
        en: "Extensive biomatic corridor, they are the continuation to the east of the Quebrada"
      },
      picture: require("../../assets/yungas.png"),
    },
  ];

  return (
    <div className={classes["container"]}>
      {regions.map((region) => {
        return <RegionItem item={region} key={region.id} language={language}/>;
      })}
    </div>
  );
};

export default RegionsList;
