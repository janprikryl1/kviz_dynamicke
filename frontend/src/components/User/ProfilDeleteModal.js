import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import getCookie from "../../functions/getCookie";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function ProfilDeleteModal(props) {
    const navigate = useNavigate();
    function deleteProfile(e) {
        e.preventDefault();
        fetch(`/api/update_address`, {
            credentials: 'include',
            method: 'DELETE',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
        }).then(async (response) => {
            if (response.status === 200) {
                showSuccessMessage();
                await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 sec
                props.setCurrentUser(false);
                navigate("/");
            }
        }).catch((response) => {
            showErrorMessage();
        });
    }

    const showErrorMessage = () => {
        toast.error('Chyba!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const showSuccessMessage = () => {
        toast.success('Všechna data odstraněna!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Opravdu si přejete odstranit vaše data
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form onSubmit={(e) => deleteProfile(e)}>
                  <p><b>Varování</b></p>
                  <p>Vymazáním profilu se <b>vymažou všechna data</b>, vymažete tedy <b>všechny data o objednávkách</b> (i těch nedkončených)</p>
                  <p>Tedy i to, co jste zaplatili už nedojde</p>
                  <i>Tuto možnost vám nabízíme pro ochranu vašich dat</i>
                  <br />
                  <Button variant="danger" type="submit">Opravdu chci profil a všechna data vymazat</Button>
              </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
    )
}
export default ProfilDeleteModal;