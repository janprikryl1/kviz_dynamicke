import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import getCookie from "../../functions/getCookie";

function UserDetails(props) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");


    useEffect(() => {
        if (props.user)
        fetch(`/api/get_user_deails?id=${props.user}`, {
            credentials: 'include',
            method: 'GET',
            mode: 'same-origin',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            }).then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
           }).then((data) => {
                setEmail(data.email);
                setPhone(data.phone);
                setName(data.name);
                setSurname(data.surname);
           }).catch((response) => {
               console.log("error getting address");
           });
    }, [props.user])

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Detail uživatele
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h3>{name} {surname}</h3>
              <p>E-mail: {email}</p>
              <p>Telefon: {phone}</p>
          </Modal.Body>
          <Modal.Footer>
              <a href={"mailto:"+ email} style={{textDecoration:"none"}}>
                  <Button variant="primary">
                    Kontaktovat
                  </Button>
              </a>
          </Modal.Footer>
        </Modal>
    )
}
export default UserDetails;