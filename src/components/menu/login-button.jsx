import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginButton(props) {
  return <Link to={props.rutas}>{props.name} <Button variant="outlined " ></Button></Link>;
}

export default LoginButton;
