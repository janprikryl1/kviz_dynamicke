import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CookieModal(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Tento web využívá soubory cookies
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
                  <div className="col-sm-1">
                      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 512 512" style={{marginLeft:"5px"}}><path d="M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"/></svg>
                  </div>
                  <div className="col-sm">
                      <p style={{marginTop:"5px"}}>Používáním tohoto webu souhlasíte s ukládáním souborů cookies.</p>
                  </div>
              </div>


          </Modal.Body>
          <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>
                    Beru na vědomí
                </Button>
          </Modal.Footer>
        </Modal>
    )
}
export default CookieModal;