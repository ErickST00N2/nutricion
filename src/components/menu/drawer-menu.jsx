import React, { Component } from "react";
import { Box } from "@mui/system";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import Colores from "../../util/colores";
import {
    // InboxRounded as InboxIcon,
    HomeRounded as HomeRoundedIcon,
    LogoutRounded as LogoutIcon,
    AddCircle,
    AddCommentOutlined,
    LoginRounded
} from "@mui/icons-material";

class DrawerMenu extends Component {
    

    render() {
        // Obtener la instancia única de Colores
        const colors = Colores.getInstance();

        // Configuración de los elementos de la lista
        const listItems = [
            {
                icon: <HomeRoundedIcon />,
                text: "Inicio",
            },
            {
                icon: <AddCommentOutlined />,
                text: "Registrar cita",
            },
            {
                icon: <LoginRounded />,
                text: "Iniciar Sesión",
            },
            {
                icon: <AddCircle />,
                text: "Registrar",
            },
            {
                icon: <LogoutIcon />,
                text: "Cerrar sesión",
            },
        ];

        // Usar los colores para configurar el estilo de Box
        return (
            <Box
                sx={{
                    width: 250,
                    height: "100vh",
                    bgcolor: colors.verdeDebil, // Usa el color deseado
                }}
            >
                {/* Contenido del componente */}
                <nav>
                    <List>
                        {listItems.map((item, index) => (
                            <ListItem key={index} button>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </nav>
            </Box>
        );
    }
}

export default DrawerMenu;
