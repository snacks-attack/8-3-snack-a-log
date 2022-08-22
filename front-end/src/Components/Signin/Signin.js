import './Signin.scss';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Signin = ({ handleUser }) => {
  const API = process.env.REACT_APP_API_URL;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [API]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInUser = {
      password: password,
      email: email,
    };
    const foundUser = users.find((user) => {
      return (
        user.email === loggedInUser.email && loggedInUser.password === password
      );
    });
    if (foundUser) {
      notify(foundUser);
    }
  };

  const notify = (foundUser) => {
    toast.success(
      'You have been signed in. \n You will be redirected in 3 seconds.',
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
      handleUser(foundUser);
    }, 4100);
  };

  return (
    <section className="SigninSection">
      {error && <p className="error">{error}</p>}
      <h1>Sign in</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>

        <br />
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
      <ToastContainer autoClose={3000} theme="dark" />
    </section>
  );
};

export default Signin;
