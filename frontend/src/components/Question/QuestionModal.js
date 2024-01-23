import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Parser from 'html-react-parser';

function QuestionModal(props) {
    const [countdown, setCountdown] = useState(60); // Počáteční hodnota odpočtu v sekundách

    useEffect(() => {
        let timer;

        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);
        }

        // Zastavení odpočtu a vyčištění intervalu po zavření modálního okna
        return () => {
            clearInterval(timer);
        };
    }, [countdown]);

    const resetCountdown = () => {
        setCountdown(60);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
            onShow={resetCountdown} // Přidáno onShow událost, která se volá při zobrazení modálního okna
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Otázka za {props.price} bodů
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-sm-10">
                        <h1>{Parser(props.text)}</h1>
                    </div>
                    <div className="col-sm-1">
                        {countdown < 11 ? <h3 style={{paddingTop:"10px", color:"red", textAlign:"center"}}>Odpočet: {countdown}</h3> : <h3 style={{paddingTop:"10px", textAlign:"center"}}>Odpočet: {countdown}</h3>}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide1}>
                    Skupinka 1
                </Button>
                <Button variant="success" onClick={props.onHide2}>
                    Skupinka 2
                </Button>
                <Button variant="danger" onClick={props.onHide3}>
                    Skupinka 3
                </Button>
                <Button variant="warning" onClick={props.onHide4}>
                    Skupinka 4
                </Button>
                <Button variant="dark" onClick={props.onHideNobody}>
                    Nikdo
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default QuestionModal;
