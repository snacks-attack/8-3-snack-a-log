import './Show.scss';
import axios from 'axios';
import HeartHealth from '../../HeartHealth';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const Snack = ({ user }) => {
  const [snack, setSnack] = useState({});
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/authenticated/${user.id}/snacks/${id}`)
      .then((response) => {
        setSnack(response.data);
      })
      .catch((err) => setError(err));
  }, [user.id, id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/authenticated/${user.id}/snacks/${id}`)
      .then(() => {
        notify();
      })
      .catch((err) => setError(err));
  };

  const notify = () => {
    toast.success(
      'Snack has been Deleted! \n You will be redirected in 3 seconds.',
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
    <article className="showSnackDetails">
      {error && <p className="error">{error}</p>}
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
        <Link to={`/authenticated/${user.id}/snacks`}>
          <Button variant="primary">Back</Button>
        </Link>
        <Link to={`/authenticated/${user.id}/snacks/${id}/edit`}>
          <Button variant="warning">Edit</Button>
        </Link>
        <div>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme="dark" />
    </article>
  );
};

export default Snack;
