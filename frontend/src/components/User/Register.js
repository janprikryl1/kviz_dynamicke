import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import getCookie from "../../functions/getCookie";

function Register(props) {
  const showErrorMessage = () => {
        toast.error('Chyba! Zkontrolujte údaje', {
            position: toast.POSITION.TOP_RIGHT
        });
  };

  const showErrorEmailUsed = () => {
        toast.error('Tento e-mail je už používán', {
            position: toast.POSITION.TOP_RIGHT
        });
  };
  const showErrorPasswordMessage = () => {
      toast.error('Heslo musí mít minimálně 8 znaků!', {
        position: toast.POSITION.TOP_RIGHT
      });
  };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [surname, setSurname] = useState("");

    const navigate = useNavigate();

    function submitRegistration(e) {
      e.preventDefault();
      if (password.length < 8){
        showErrorPasswordMessage();
        return;
      }
      fetch("/api/register", {
        method: "POST",
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
        body: JSON.stringify({
          email: email,
          username: username,
          surname: surname,
          password: password,
        }),
      })
        .then((response) => {
          if (response.status === 201) {
                props.setRegisterShow(false);
                props.setLoginRegister(1);

                  fetch("/api/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
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
                        // Handle login error
                      }
                    })
                    .catch((error) => {
                      // Handle error
                    });

                return;
              } else if (response.status === 400) {
                return response.json();
              } else {
                    showErrorMessage();
              }
            })
          .then((data) => {
               if (data && data.error === "already_used") {
                   showErrorEmailUsed();
               } else if (data) {
                   showErrorMessage();
               }
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
          Registrace
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
                          <p className=" mb-5">Zadej prosím vaše údaje</p>
                          <div className="mb-3">
                            <Form onSubmit={(e) => submitRegistration(e)}>
                              <Form.Group className="mb-3" controlId="formBasicUserName">
                                <Form.Label className="text-center">
                                  Jméno
                                </Form.Label>
                                <Form.Control type="text" placeholder="Jméno" onChange={(e) => setUsername(e.target.value)} required/>
                              </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicSurname">
                                <Form.Label className="text-center">
                                  Přijmení
                                </Form.Label>
                                <Form.Control type="text" placeholder="Přijmení" onChange={(e) => setSurname(e.target.value)} required/>
                              </Form.Group>


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
                              </Form.Group>
                              <div className="d-grid">
                                <Button variant="primary" type="submit">
                                  Zaregistrovat se
                                </Button>
                              </div>
                            </Form>
                            <div className="mt-3">
                              <p className="mb-0  text-center">
                                Máte už profil?
                                <Button style={{marginLeft:"10px"}} onClick={() => {props.setLoginRegister(1); props.setRegisterShow(false);props.setLoginShow(true);}}>Přihlaste se!</Button>
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
export default Register;