import React, {useEffect, useState} from "react";
import Groups from "../components/Question/Groups";
import Question from "../components/Question/Question";
import { useParams } from "react-router-dom";


function Quiz() {
    const [points1, set1Points] = useState(0);
    const [points2, set2Points] = useState(0);
    const [points3, set3Points] = useState(0);
    const [points4, set4Points] = useState(0);

    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState("");
    const { quizId } = useParams();


    useEffect(() => {
        fetch(`/api/get_categories?quiz_id=${quizId}`, {
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
                setCategories(data.categories);
                setTitle(data.title);
           }).catch((response) => {
               console.log("error getting data");
           });
    }, [])


  return (
    <div className="App">
        <h2 style={{textAlign:"center"}}>{title}</h2>
        <br />
        <Groups points1={points1} points2={points2} points3={points3} points4={points4}/>
        <br /><br />
        <div className="container">
            {categories.map((category, categoryKey) => (
                <div key={categoryKey}>
                    <h3>{category.title}</h3>
                    <div className="row">
                        {category.questions.map((question, key) => (
                            <div key={key} className="col-sm-1">
                                <Question price={question.points} variant={categoryKey%2==0?"success":"danger"} question={question.title} points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                            </div>
                        ))}
                    </div>
                    <br /><br />
                </div>
            ))}
        </div>
    </div>
  );
}
export default Quiz;