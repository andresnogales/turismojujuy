import { propTypes } from "react-bootstrap/esm/Image";
import Button from "../Button/Button";
import classes from "./Widget.module.css";
const Widget = (props) => {
  return (
    <div className={classes["widget"]}>
      <div className={classes["title"]}>
        <h3>{props.title}</h3>
      </div>
      <div className={classes["content"]}>
        <p>
          {props.icon && <img
            className={classes["icon"]}
            src={"https://images.weserv.nl/?url=" + props.icon}
            width="41"
          />}
          {props.content}
        </p>
      </div>
      <div className={classes["link"]}>
        <Button label={props.btnLabel} onClick={props.onClick} />
      </div>
    </div>
  );
};

export default Widget;
