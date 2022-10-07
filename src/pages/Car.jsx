import React, { useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Car = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function Example() {
    return (
      <>
          <OffCanvasExample key={idx} placement={'end'} name={'end'} />
      </>
    )
  }

    return (
        <Offcanvas show={show} onHide={handleClose}>
             <Button variant="primary" onClick={handleShow} className="me-2">
                ana
            </Button>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
      </Offcanvas>
    )
}


export default Car