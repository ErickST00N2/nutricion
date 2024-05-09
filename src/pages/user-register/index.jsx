import React from 'react';
import FormRegister from '../../components/form-register';
import { Container, Row, Col } from 'react-bootstrap';

import './user-register.css'
import ResponsiveDesign from '../../util/responsive-design';
export default function UserRegisterPage() {
    
    return (
        <Container fluid className='container-registers'>
            <Row className='justify-content-md-center Row-register'>
                <Col lg={6}>
                    <Container className='user-register' style={{ padding: '30px', width: ResponsiveDesign.isMobileAndTablet() ? '100%' : '80%' }}>
                        <header>Registrarse</header>
                        <FormRegister />
                    </Container>
                </Col>
                <Col lg={6}>
                    <div className='img-register'></div>
                </Col>
            </Row>
        </Container>
    );
}
