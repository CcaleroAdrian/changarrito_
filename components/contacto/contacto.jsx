'use client'

import React from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { love_ya_like_a_sister, work_sans } from '../../app/fonts';
import InputGroup from 'react-bootstrap/InputGroup';
import { HiUserCircle } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IconContext } from "react-icons";

export function Contacto() {
    return (
        <div>
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF1744" fill-opacity="0.56" d="M0,256L15,261.3C30,267,60,277,90,250.7C120,224,150,160,180,154.7C210,149,240,203,270,218.7C300,235,330,213,360,197.3C390,181,420,171,450,192C480,213,510,267,540,282.7C570,299,600,277,630,245.3C660,213,690,171,720,133.3C750,96,780,64,810,69.3C840,75,870,117,900,112C930,107,960,53,990,80C1020,107,1050,213,1080,250.7C1110,288,1140,256,1170,256C1200,256,1230,288,1260,288C1290,288,1320,256,1350,208C1380,160,1410,96,1425,64L1440,32L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path></svg>
            <div className={love_ya_like_a_sister.className}>
                <h1 className='titulo-text text-center'>Contáctanos</h1>
            </div>
            <div className='container mt-5'>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu telefono" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
    </Form>
            </div>
        </div>
    )
}