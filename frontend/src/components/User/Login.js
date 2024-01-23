import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getCookie from "../../functions/getCookie";

function Login(props) {

    const showErrorMessage = () => {
        toast.error('Chyba! Zkontrolujte údaje', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  function submitLogin(e) {
      e.preventDefault();
      fetch("/api/login", {
        method: "POST",
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            props.setCurrentUser(true);
            navigate("/profile");
          } else {
            showErrorMessage();
          }
        })
        .catch((error) => {
          showErrorMessage();
        });
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Přihlášení
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <div>
              <Container>
                <Row className="justify-content-center align-items-center">
                  <Col md={8} lg={6} xs={12}>

                    <Card className="shadow">
                      <Card.Body>
                        <div className="mb-3 mt-md-4">
                          <h2 className="fw-bold mb-2">Ahoj</h2>
                          <p className=" mb-5">Zadej prosím e-mailovou adresu a heslo</p>
                          <div className="mb-3">
                            <Form onSubmit={(e) => submitLogin(e)}>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-center">
                                  E-mailová adresa
                                </Form.Label>
                                <Form.Control type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required/>
                              </Form.Group>

                              <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                              >
                                <Form.Label>Heslo</Form.Label>
                                <Form.Control type="password" placeholder="Heslo" onChange={(e) => setPassword(e.target.value)} required/>
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                              >
                                <p className="small">
                                <Link to="/forgotten_password" role="link" onClick={() => {props.setLoginShow(false);props.setRegisterShow(false);}}>
                                    Zapomenuté heslo?
                                </Link>
                                </p>
                              </Form.Group>
                              <div className="d-grid">
                                <Button variant="primary" type="submit">
                                  Přihlásit se
                                </Button>
                              </div>
                            </Form>
                            <div className="mt-3">
                              <p className="mb-0  text-center">
                                Nemáte ještě profil?
                                <Button style={{marginLeft:"10px"}} onClick={() => {props.setLoginRegister(0);props.setRegisterShow(true);props.setLoginShow(false)}}>Zaregistrujte se!</Button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
      </div>
      </Modal.Body>
    <ToastContainer/>
    </Modal>
  );
}
export default Login;