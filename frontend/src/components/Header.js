import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import {BsPersonCircle} from "react-icons/bs";
import Login from "../components/User/Login";
import Register from "../components/User/Register";


function Header(props) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue) {
      navigate(`/search?query=${encodeURIComponent(searchValue)}`);
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      handleSearch();
    }
  };



    function submitLogout(e) {
      e.preventDefault();
      fetch("/api/logout", {
        method: "POST",
        credentials: "include", // To include cookies in the request
      }).then((response) => {
        if (response.status === 200) {
          props.setCurrentUser(false);
          navigate("/");
        }
      })
          .catch((error) => {
            // Handle error
          });
    }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Nav.Link as={Link} to="/">
            <Navbar.Brand>Kvízy</Navbar.Brand>
      </Nav.Link>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="new_drawing">
            Nový kvíz
            </Nav.Link>
            <Nav.Link as={Link} to="contact">
                Kontakt
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {props.currentUser ?
                (
                    <Dropdown style={{ marginLeft: "10px" }}>
                      <Dropdown.Toggle variant="outline-primary">
                        Profil <BsPersonCircle />
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{position: "absolute", right: 0}}>
                        <Dropdown.Item><Link to="/profile" style={{textDecoration:"none"}}>Profil</Link></Dropdown.Item>
                        <Dropdown.Item onClick={submitLogout} style={{color:"red"}}>Odhlásit</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                )
              : (
                <div>
                  <Button style={{marginLeft:"10px", background: "transparent", color:"black"}} onClick={() => props.LoginRegister ? props.setLoginShow(true) : props.setRegisterShow(true)}><BsPersonCircle /></Button>
                  <Login show={props.LoginShow} onHide={() => props.setLoginShow(false)} setLoginRegister={props.setLoginRegister} setRegisterShow={props.setRegisterShow} setLoginShow={props.setLoginShow} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
                  <Register show={props.RegisterShow} onHide={() => props.setRegisterShow(false)} setLoginRegister={props.setLoginRegister} setLoginShow={props.setLoginShow} setRegisterShow={props.setRegisterShow} variant="primary" type="submit" setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
                </div>
              )
            }
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;