import "./New.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function NewSnack() {
  const navigate = useNavigate();
  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image: "",
  });

  const handleTextChange = (event) => {
    setSnack({
      ...snack,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/snacks`, snack)
      .then(() => navigate("/snacks"))
      .catch((err) => console.log(err));
  };

  return (
    <section className="newSnackSection">
      <h2>New Snacks</h2>
      <Form onSubmit={handleSubmit} className="newForm">
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            value={snack.name}
            onChange={handleTextChange}
            placeholder="new snack name.."
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="fiber">Fiber</Form.Label>
          <Form.Control
            id="fiber"
            type="number"
            value={snack.fiber}
            onChange={handleTextChange}
            placeholder="5, 10, etc"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="protein">Protein</Form.Label>
          <Form.Control
            id="protein"
            type="number"
            value={snack.protein}
            onChange={handleTextChange}
            placeholder="5, 10, etc"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="added_sugar">Added Sugar</Form.Label>
          <Form.Control
            id="added_sugar"
            type="number"
            value={snack.added_sugar}
            onChange={handleTextChange}
            placeholder="5, 10, etc"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="image">Image Url</Form.Label>
          <Form.Control
            id="image"
            type="text"
            value={snack.image}
            onChange={handleTextChange}
            placeholder="https://image.com"
          ></Form.Control>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default NewSnack;
