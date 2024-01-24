import React, {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Home(props) {
    const [quizes, setQuizes] = useState([]);

    useEffect(() => {
        fetch('/api/get_quizes', {
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
                setQuizes(data.quizes);
           }).catch((response) => {
               console.log("error getting quiz sets");
           });
    }, []);

    return (
        <div className="container" style={{paddingBottom:150}}>
            <h1>Kvízy</h1>
            <CardGroup>

                    {props.user ?
                        <Link to="/new_quiz" style={{textDecoration: 'none'}}>
                            <Card>
                                <Card.Body>
                                  <Card.Title>Nový kvíz</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                  <small className="text-muted">Vytvořit nový kvíz</small>
                                </Card.Footer>
                            </Card>
                        </Link>
                        : null}

                    {quizes.map((quiz) => (
                        <Link key={quiz.id} to={"quiz/"+quiz.id} style={{textDecoration: 'none'}}>
                         <Card>
                            <Card.Body>
                              <Card.Title>{quiz.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                              <small className="text-muted">Vytvořil {quiz.author}</small>
                            </Card.Footer>
                          </Card>
                        </Link>
                    ))}

            </CardGroup>
        </div>
    )
}

export default Home;