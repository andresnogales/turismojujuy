import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      {props.label && <h1 className={classes["hero-text"]}>{props.label}</h1>}
      <img src={props.picture} alt="Paisaje Jujuy" />           
    </header>
  );
};

export default Header;
