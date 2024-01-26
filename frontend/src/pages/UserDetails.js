import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import getCookie from "../functions/getCookie";
import {Link} from "react-router-dom";
import MyQuestionSets from "../components/MyQuestionSets";

function UserDetails(props) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [questionSets, setQuestionSets] = useState([]);

    useEffect(() => {
        if (props.user) {
        fetch('/api/get_user_deails', {
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
                setName(data.name);
                setSurname(data.surname);
           }).catch((response) => {
               console.log("error getting address");
           });
    }}, [props.user])


    return (
        <div className="container">
            <h1>Detail uživatele</h1>

            <h3>{name} {surname}</h3>
            <p>E-mail: {email}</p>

            {questionSets && questionSets.length ? (
                <div>
                    <p>Seznam mých kvízů</p>
                    {questionSets.map((question) => (
                        <div className="container">
                            <Link to="">{question}</Link>
                        </div>
                    ))}
                </div>
                ) : null}

            <MyQuestionSets />
        </div>
    )
}
export default UserDetails;