import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewQuiz() {
    const [title, setTitle] = useState(""); // Stav pro název kvízu
    const [categories, setCategories] = useState([]); // Stav pro ukládání kategorií
    const [categoryTitle, setCategoryTitle] = useState(""); // Stav pro název nové kategorie

    function createNewCategory() {
        if (categoryTitle.trim() !== "") {
            setCategories([...categories, categoryTitle]); // Přidání nové kategorie do stavu
            setCategoryTitle(""); // Vyčištění stavu pro název nové kategorie
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Zde můžete zpracovat odeslání formuláře, například odeslat data na server
    }

    return (
        <div className="container">
            <h1>Vytvořit nový kvíz</h1>
            <br />
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
                    <Button variant="success" key={index}>{category}</Button>
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
                <br /><br />



                <Button variant="primary" type="submit">
                    Vytvořit
                </Button>
            </Form>
        </div>
    );
}

export default NewQuiz;
