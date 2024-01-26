import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import getCookie from "../functions/getCookie";
import {toast} from "react-toastify";

function NewQuiz(props) {
    const [title, setTitle] = useState("");
    const [categories, setCategories] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState("");
    const [questions, setQuestions] = useState([]);
    const [questionText, setQuestionText] = useState("");
    const [questionPoints, setQuestionPoints] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");

    function createNewCategory() {
        if (categoryTitle.trim() !== "") {
            setCategories([...categories, categoryTitle]);
            setCategoryTitle("");
        }
    }

    function addNewQuestion() {
        if (questionText.trim() !== "" && selectedCategory !== "") {
            const newQuestion = {
                text: questionText,
                points: questionPoints,
                category: selectedCategory,
            };
            setQuestions([...questions, newQuestion]);
            setQuestionText("");
            setQuestionPoints(0);
            setSelectedCategory("");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Vytvoření objektu s daty pro odeslání na server
        const dataToSend = {
            title: title,
            categories: categories,
            questions: questions,
        };

        // Odešlete data na server pomocí fetch
        fetch('/api/create_question_set', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(dataToSend),
        })
            .then(response => {
                if (!response.ok) {
                    showErrorMessage();
                }
                showSuccessMessage();
                setTitle("");
                setCategories([]);
                setCategoryTitle("");
                setQuestions([]);
                setQuestionText("");
                setQuestionPoints(0);
                setSelectedCategory("");
            })
            .catch(error => {
                showErrorMessage();
            });
    }

    const showErrorMessage = () => {
        toast.error('Chyba!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const showSuccessMessage = () => {
        toast.success('Vytvořeno!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <div className="container">
            {props.user ?
                (
                    <div>
                        <h1>Vytvořit nový kvíz</h1>
                        <br/>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Název kvízu</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Titulek"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                    Například: kde budete kvíz prezentovat
                                </Form.Text>
                            </Form.Group>

                            <h2>Kategorie</h2>
                            {categories.map((category, index) => (
                                <p key={index}>{category}</p>
                            ))}
                            <Form.Group className="mb-3" controlId="categoryTitle">
                                <Form.Label>Název</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Obsah"
                                    value={categoryTitle}
                                    onChange={(e) => setCategoryTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="danger" onClick={createNewCategory}>
                                Přidat
                            </Button>
                            <br/><br/>

                            {/* Formulář pro otázky s přidáním bodů */}
                            <h2>Otázky</h2>
                            {questions.map((question, index) => (
                                <div key={index}>
                                    <p>{`Otázka: ${question.text}, Kategorie: ${question.category}, Body: ${question.points}`}</p>
                                </div>
                            ))}
                            <Form.Group className="mb-3" controlId="questionText">
                                <Form.Label>Text otázky</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Text otázky"
                                    value={questionText}
                                    onChange={(e) => setQuestionText(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="questionPoints">
                                <Form.Label>Bodová hodnota otázky</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Bodová hodnota"
                                    value={questionPoints}
                                    onChange={(e) => setQuestionPoints(parseInt(e.target.value))}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="selectedCategory">
                                <Form.Label>Vybraná kategorie</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="">Vyberte kategorii</option>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" onClick={addNewQuestion}>
                                Přidat otázku
                            </Button>
                            <br/><br/>

                            <Button variant="primary" type="submit">
                                Vytvořit
                            </Button>
                        </Form>
                    </div>
                ) : <h2>Nejste přihlášeni</h2>}
        </div>
    );
}

export default NewQuiz;