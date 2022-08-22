import './Edit.scss';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditSnack = ({ user }) => {
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [snackName, setSnackName] = useState('');
  const [snackProtein, setSnackProtein] = useState(0);
  const [snackFiber, setSnackFiber] = useState(0);
  const [snackSugar, setSnackSugar] = useState(0);
  const [snackImage, setSnackImage] = useState('');

  useEffect(() => {
    axios
      .get(`${API}/authenticated/${user.id}/snacks/${id}`)
      .then((res) => {
        setSnackName(res.data.name);
        setSnackProtein(res.data.protein);
        setSnackFiber(res.data.fiber);
        setSnackSugar(res.data.added_sugar);
        setSnackImage(res.data.image);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]); // eslint-disable-line

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setSnackName(value);
        break;
      case 'protein':
        setSnackProtein(value);
        break;
      case 'fiber':
        setSnackFiber(value);
        break;
      case 'sugar':
        setSnackSugar(value);
        break;
      case 'image':
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
      .put(`${API}/authenticated/${user.id}/snacks/${id}`, newSnackData)
      .then(() => {
        notify();
      })
      .catch(() => {
        toast.error('Error updating snack!', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const notify = () => {
    toast.success(
      'Snack has been Updated! \n You will be redirected in 3 seconds.',
      {
        position: 'top-center',
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
    <section className="editSnackSection">
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
      <Link to={`/authenticated/${user.id}/snacks`}>
        <Button variant="secondary">Cancel</Button>
      </Link>

      {error && <p>{error}</p>}
      <ToastContainer autoClose={3000} theme="dark" />
    </section>
  );
};

export default EditSnack;
