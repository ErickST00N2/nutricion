import LogoMenu from "../../util/logo-menu.jsx";
import LinkButton from "./login-button.jsx";
import { Navbar, Container } from "react-bootstrap";
import "../../util/colores.jsx";
import React from "react";
import { Link } from "react-router-dom";
import { nameRoutes } from "../../router/routes.jsx";




function NavBarMenu(props) {
  return (
    <Navbar bg="green" className="bg-body-tertiary navbar-fixed navbarmenu"  >
      <Container>
        <Link to={nameRoutes.WelcomePage}>
          <img
            src={LogoMenu}
            width="180"
            height="90"
            className="d-inline-block align-top"
            alt="Nutrición logo"
          />{" "}
        </Link>
        {/* <Navbar.Brand href="/">Navbar with text</Navbar.Brand> */}
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse className="justify-content-end">

          {/* <Navbar.Text><Link to='/login'>Iniciar Sesión</Link> </Navbar.Text> */}

          <LinkButton name='Iniciar Sesión' ruta={nameRoutes.LoginPage}
            className='my-link'
            // activeClassName='active'
          />

          <LinkButton name='Registrar' ruta={nameRoutes.UserRegisterPage}
            className='btn btn-outline-success link-btn'
            activeClassName='active' />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;
