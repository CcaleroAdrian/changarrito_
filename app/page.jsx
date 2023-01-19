'use client'
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { love_ya_like_a_sister, work_sans } from './fonts';
import ModalFoot from './ModalFoot';

export default function Home() {
  return (
    
    <div>
      <Stack direction="horizontal" gap={2}>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </Stack>
      <h1 className={love_ya_like_a_sister.className}>Titulos</h1>
      <p className={work_sans.className}>
          Ipsum sint exercitation fugiat ullamco culpa consectetur laborum excepteur. Aliquip sint id cupidatat ex ullamco proident ipsum sint sit esse cillum ullamco. Dolore ea deserunt mollit adipisicing sunt duis cupidatat do anim consequat veniam.
      </p>
      <ModalFoot></ModalFoot>
    </div>
  )
}
