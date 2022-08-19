import "./Edit.scss";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditSnack = () => {
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [snackName, setSnackName] = useState("");
  const [snackProtein, setSnackProtein] = useState(0);
  const [snackFiber, setSnackFiber] = useState(0);
  const [snackSugar, setSnackSugar] = useState(0);
  const [snackImage, setSnackImage] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnackName(res.data.payload.name);
        setSnackProtein(res.data.payload.protein);
        setSnackFiber(res.data.payload.fiber);
        setSnackSugar(res.data.payload.added_sugar);
        setSnackImage(res.data.payload.image);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]); // eslint-disable-line

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setSnackName(value);
        break;
      case "protein":
        setSnackProtein(value);
        break;
      case "fiber":
        setSnackFiber(value);
        break;
      case "sugar":
        setSnackSugar(value);
        break;
      case "image":
        setSnackImage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSnackData = {
      name: snackName,
      protein: Number(snackProtein),
      fiber: Number(snackFiber),
      added_sugar: Number(snackSugar),
      image: snackImage,
    };

    axios
      .put(`${API}/snacks/${id}`, newSnackData)
      .then((res) => {
        navigate("/snacks");
        // toast.success("Snack updated successfully!");
      })
      .catch((err) => {
        // toast.error("Error updating snack!");
      });
  };

  return (
    <section className="editSnackSection">
      {/* <ToastContainer /> */}
      <h1>Edit Snack</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Snack Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={snackName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="protein">
          <Form.Label>Protein</Form.Label>
          <Form.Control
            type="number"
            name="protein"
            value={snackProtein}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="fiber">
          <Form.Label>Fiber</Form.Label>
          <Form.Control
            type="number"
            name="fiber"
            value={snackFiber}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="added_sugar">
          <Form.Label>Added Sugar</Form.Label>
          <Form.Control
            type="number"
            name="sugar"
            value={snackSugar}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={snackImage}
            onChange={handleChange}
          />
          <img src={snackImage} alt="snack" />
        </Form.Group>

        <br />

        <Button variant="primary" type="submit">
          Update Snack
        </Button>
      </Form>

      {error && <p>{error}</p>}
    </section>
  );
};

export default EditSnack;
