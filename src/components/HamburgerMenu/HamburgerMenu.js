import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = (props) => {
  const [state, setState] = useState("");
  const toggleMobileMenu = () => {
    if (state === "") setState("open");
    else setState("");
  };
  return (
    <div
      id={classes["hamburger-icon"]}
      className={classes[state]}
      onClick={toggleMobileMenu}
    >
      <div className={classes["bar1"]}></div>
      <div className={classes["bar2"]}></div>
      <div className={classes["bar3"]}></div>
      <ul className={classes["mobile-menu"]}>
        {props.menu.map((item) => {
            return(
              <li key={item.id}>
                 <Link className={classes["link"]} to={"/"}>
                    <span>{item.title[props.language]}</span>
                  </Link>
                {item.submenu ? (
                    <ul className={classes["sub-menu"]}>
                      {item.submenu.map((subitem) => {
                        return (
                          <li key={item.submenu.id}>
                            <Link className={classes["link"]} to={"/"}>
                              {subitem.title
                                ? subitem.title[props.language]
                                : subitem}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
              </li>
            )
          })}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
