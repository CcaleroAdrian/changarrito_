import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { love_ya_like_a_sister, work_sans } from './fonts';

export default function Footer() {
    return (
        <footer>
            <Row className='letter-footer text-center'>
                <Col >
                    <h1 className={love_ya_like_a_sister.className} style={{lineHeight:'140px', fontSize:'80px'}}>Changarrito</h1>
                </Col>
                <Col className={work_sans.className}>
                    <h3>Unete a Changarrito</h3>
                    <p>Registra tu restaurante</p>
                    <p>trabaja con nosotros</p>
                    <p>Registra tu tienda</p>
                </Col>
                <Col className={work_sans.className}>
                    <h3 >Sobre Changarrito</h3>
                    <p>Términos y Condiciones</p>
                    <p>Políticas de privacidad</p>
                    <p>Tratamiento de datos</p>
                </Col>
            </Row>
        </footer>
    )
}
