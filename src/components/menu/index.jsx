import LogoMenu from "../../util/logo-menu";
import LoginButton from "./login-button.jsx";
import { Navbar, Container } from "react-bootstrap";
import ResponsiveDesign from "../../util/responsive-design";
import DrawerMenu from "./drawer-menu.jsx";
import NavBarMenu from "./nav-bar-menu.jsx";

import { useState, useEffect } from "react";

function MenuAppBar(props) {
  // Crear la instancia de ResponsiveDesign
  const responsiveDesign = new ResponsiveDesign();
  // Crear estado para la detección del tipo de dispositivo
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(ResponsiveDesign.isMobileAndTablet());
  
  // Efecto para manejar cambios de tamaño de pantalla
  useEffect(() => {
      const handleResize = () => {
          setIsMobileOrTablet(ResponsiveDesign.isMobileAndTablet());
      };
      
      // Agregar el evento de cambio de tamaño
      window.addEventListener("resize", handleResize);
      
      // Limpiar el evento de cambio de tamaño
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, [responsiveDesign]);
  
  // Retornar el componente apropiado según el estado
  return isMobileOrTablet ? <DrawerMenu /> : <NavBarMenu />;
}

export default MenuAppBar;
