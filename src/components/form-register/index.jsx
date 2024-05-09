import React from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { nameRoutes } from "../../router/routes"
import DropZoneImg from './widgets/dropzone-img';


function FormRegister() {

    return (
        <Form className="form-register">
            {/* Campo de nombre */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridName">

                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Introduzca su nombre" />
                </Form.Group>
            </Row>

            {/* Campo de número de teléfono */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Número de Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="Introduzca su número de teléfono" />
                </Form.Group>
            </Row>

            {/* Campo de correo electrónico */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Introduzca su correo" />
                </Form.Group>
            </Row>

            {/* Campo de contraseña */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Introduzca su contraseña" />
                </Form.Group>
            </Row>

            {/* Área de arrastrar y soltar para la imagen */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridImage">
                    <Form.Label>Foto de Perfil</Form.Label>
                    <DropZoneImg/>
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <p>Al registrarte aceptas la <Link>Política de privacidad</Link> y los <Link>Términos</Link> de Healthybite</p>
                </Row>

            {/* Botón de envío */}
            <Row className='justify-content-md-center mb-3'>
                <Button variant="primary" type="submit" className="btn-greenlife">
                    Registrarme
                </Button>
            </Row>
            <Row className='justify-content-md-center mb-3'>
                <p>¿Ya tienes una cuenta?, <Link to={nameRoutes.LoginPage}>Inicía sesión</Link></p></Row>

        </Form>
    );
}

export default FormRegister;
