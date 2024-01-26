import React, {useEffect, useState} from "react";
import getCookie from "../functions/getCookie";
import {Link} from "react-router-dom";


function MyQuestionSets() {
    const [questionSets, setQuestionSets] = useState([]);

    useEffect(() => {
        fetch('/api/get_my_quizes', {
            credentials: 'include',
            method: 'GET',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            }).then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
           }).then((data) => {
                setQuestionSets(data.quizes);
           }).catch((response) => {
               console.log("error getting quiz sets");
           });
    }, []);

    return (
        <div>
            <h3>Moje kvízy</h3>
            {questionSets && questionSets.length ? (
                <>
                {questionSets.map((quiz) => (
                    <Link key={quiz.id} to={"/quiz/"+quiz.id} style={{textDecoration: 'none'}}>{quiz.title}</Link>
                    ))}
                </>
            ):<p>Zatím jste nevytvořili žádné kvízy</p>}
        </div>
    )
}
export default MyQuestionSets;