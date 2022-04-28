import classes from "./Header.module.css";
import Hero from "../../assets/hero.png"

const Header = (props) => {
  return (
    <header className={classes.header}>
      {props.label && <h1 className={classes["hero-text"]}>{props.label}</h1>}
      <img src={props.picture? "https://images.weserv.nl/?url=" + props.picture: Hero} alt="Paisaje Jujuy" />           
    </header>
  );
};

export default Header;
