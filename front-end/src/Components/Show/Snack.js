import './Show.scss';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeartHealth from '../HeartHealth';
import { Button } from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;

const Snack = () => {
  const [snack, setSnack] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => setSnack(response.data.payload))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then((res) => navigate('/snacks'))
      .catch((err) => console.log(err));
  };

  return (
    <article className="showSnackDetails">
      <aside className="snackHealth">
        <HeartHealth healthCheck={snack.is_healthy} />
      </aside>

      <div className="snackStats">
        <h2>{snack.name}</h2>
        <img src={snack.image} alt={snack.name} />
        <h6>Protein: {snack.protein}</h6>
        <h6>Fiber: {snack.fiber}</h6>
        <h6>Added Sugar: {snack.added_sugar}</h6>
      </div>

      <div className="nav">
        <Link to="/snacks">
          <Button variant="primary">Back</Button>
        </Link>
        <Link to={`/snacks/${id}/edit`}>
          <Button variant="warning">Edit</Button>
        </Link>
        <div>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Snack;
