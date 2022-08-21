import "./New.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const NewSnack = ({ user }) => {
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
      .post(`${API}/authenticated/${user.id}/snacks`, snack)
      .then(() => {
        notify();
      })
      .catch((err) => {
        toast.error(`ERROR: Snack unsuccessfully added \n ${err}`, {
          position: "top-right",
          pauseOnFocusLoss: false,
          closeOnClick: true,
          pauseOnHover: false,
        });
      });
  };

  const notify = () => {
    toast.success(
      "Snack successfully added. \n You will be redirected in 3 seconds.",
      {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        progress: undefined,
      }
    );
    setTimeout(() => {
      navigate(`/authenticated/${user.id}/snacks`);
    }, 4100);
  };

  return (
    <section className="newSnackSection">
      <h2>{user.username}'s New Snack</h2>
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

      <ToastContainer autoClose={3000} theme="dark" />
    </section>
  );
};

export default NewSnack;
