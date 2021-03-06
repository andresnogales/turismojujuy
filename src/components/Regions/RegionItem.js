import { Link } from "react-router-dom";
import classes from "./RegionItem.module.css";
const RegionItem = (props) => {
  const { name, description, picture } = props.item;
  return (
    <div className={classes["item"]}>
      <Link className={classes["link"]} to={"/region/" + props.id}>
        <img src={picture} alt={name} />
        <h3 className={classes["item-title"]}>{name}</h3>
      </Link>

      <p className={classes["description"]}>{description[props.language]}</p>
    </div>
  );
};

export default RegionItem;
