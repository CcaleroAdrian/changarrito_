'use client'
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { love_ya_like_a_sister, work_sans } from './fonts';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { FaHamburger } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';

function Menu (){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Navbar bg="dark" variant="dark" expand='md' sticky="top">
                <Container fluid>
                    <Col sm="1">
                        <Button variant="primary" href="/login" style={{ color: "white"}}>Login</Button>
                    </Col>
                    <Col sm="1">
                        <Form.Control
                            type="search"
                            placeholder="Buscar... "
                            aria-label="Search"
                            />
                    </Col>
                    <Col sm="9"  className='text-center'>
                        <Navbar.Brand href="#home">
                            <h1 className={love_ya_like_a_sister.className} style={{lineHeight:"18px", paddingTop: "1rem"}}>Changarrito</h1>
                        </Navbar.Brand>
                    </Col>
                    <Col sm="1">
                        <Button variant="outline-secondary" onClick={handleShow}><FaHamburger style={{ fontSize:"48px", color: "white"}}/></Button>
                    </Col>
                    <Navbar.Offcanvas show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;