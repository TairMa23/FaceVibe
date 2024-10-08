import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.link} className={`rounded-2xl ${props.className}`} onClick={props.onClick}>
      {props.title}
    </Link>
  );
};

export default Button;
