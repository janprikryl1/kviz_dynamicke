import React from "react";
import Button from 'react-bootstrap/Button';
import QuestionModal from "./QuestionModal";
import {useState} from "react";

function Question (props){
    const [showQuestion, setShowQuestion] = useState(false);
    const [enabled, setEnabled] = useState(true);
    return (
        <div>
            <Button variant={props.variant} onClick={() => setShowQuestion(true)} disabled={!enabled} style={{marginTop:"15px"}}>{props.price}</Button>
            <QuestionModal
                show={showQuestion}
                text={props.question}
                price={props.price}
                onHide1={() => {setShowQuestion(false); props.setPoints1(props.points1+props.price); setEnabled(false);}}
                onHide2={() => {setShowQuestion(false); props.setPoints2(props.points2+props.price); setEnabled(false);}}
                onHide3={() => {setShowQuestion(false); props.setPoints3(props.points3+props.price); setEnabled(false);}}
                onHide4={() => {setShowQuestion(false); props.setPoints4(props.points4+props.price); setEnabled(false);}}
                onHideNobody={() => {setShowQuestion(false);setEnabled(false);}}
            />
        </div>
    )
}
export default Question;