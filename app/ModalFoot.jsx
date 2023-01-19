import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoAddOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';
import { love_ya_like_a_sister, work_sans } from './fonts';

export default function ModalFoot() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const numIcon = 5;

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        size="md"
        show={show}
        onHide={handleClose}
      >
        <Card style={{ width: '100%' }} >
          <Card.Img variant="top" src="./hamburguesa-texas.jpg" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title >
              <Stack direction="horizontal" gap={2}>
                <div className='title-card'>Hamburguesa Texas</div>
                <div className="ms-auto shadow-text fw-bold" >$205.00</div>
              </Stack>
            </Card.Title>
            <Stack direction="horizontal" gap={1}>
              {/*               {Array.from({ length: 5 }).map((_, index) => (
                < div key={index}>
                  <IconContext.Provider value={{ color: "red", size: '20px' }} >
                    <div className=" ms-auto">
                      <AiOutlineStar />
                    </div>
                  </IconContext.Provider>
                </div>
              ))} */}
              <IconContext.Provider value={{ color: "red", size: '20px' }} >
                <div className=" ms-auto">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </IconContext.Provider>

              <div className="shadow-text fw-bold mx-2 "  style={{fontSize:'20px'}}>4.2</div>
            </Stack>
            <Card.Text className={work_sans.className} style={{ margin: '30px' }}>
              Hamburguesa con carne de res angus, salsa bbq cerveza, tocino, echalote, cebolla frita, mix de queso, chile serrano, chipotle mayo.
            </Card.Text>
            <Stack direction="horizontal" gap={1}>
              <div>
                <button className='button-card d-flex'>
                  <IconContext.Provider value={{ color: "white", size: '25px' }} >
                    <AiOutlineShoppingCart style={{ marginTop: '10%' }} />
                  </IconContext.Provider>
                  <p className='letter mx-2 fw-bold' >Agregar </p>
                </button>
              </div>
              <div className='ms-auto'>
                <button className='button-card-right '>
                  <div className=' d-flex justify-content-around'>
                    <IconContext.Provider value={{ size: '25px', color: 'red' }} >
                      <AiOutlineShoppingCart style={{ marginTop: '10%' }} />
                      <div><p className='fw-bold' style={{fontSize:'20px'}}>1</p></div>
                      <IoAddOutline style={{ marginTop: '10%', color: 'red' }} />
                    </IconContext.Provider>
                  </div>
                </button>
              </div>
            </Stack>
          </Card.Body>
        </Card>
      </Modal>

    </div>
  )
}
