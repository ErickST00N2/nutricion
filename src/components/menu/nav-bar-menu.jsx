import LogoMenu from "../../util/logo-menu.jsx";
import LoginButton from "./login-button.jsx";
import { Navbar, Container } from "react-bootstrap";
import "../../util/colores.jsx";
import React from "react";
import { Link } from "react-router-dom";

function NavBarMenu(props) {
  return (
    <Navbar bg="green" className="bg-body-tertiary" fixed="top" >
      <Container>
        <Link to="/">
          <img
            src={LogoMenu}
            width="180"
            height="90"
            className="d-inline-block align-top"
            alt="Nutrición logo"
          />{" "}
        </Link>
        {/* <Navbar.Brand href="/">Navbar with text</Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        {/* <Navbar.Text><Link to='/login'>Iniciar Sesión</Link> </Navbar.Text> */}
          <LoginButton name= 'login' rutas= '/login'/>
          <LoginButton  name= 'register'  rutas= '/register'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;
