import './Signin.scss';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
//import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = ({ user, handleUser }) => {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.get(`${API}/users`).then((res) => {
      console.log(res.data);
      checkIfUserExists(res.data);
    });
    const checkIfUserExists = (users) => {
      const foundUser = users.find((user) => {
        return user.email === email && user.password === password;
      });
      if (foundUser) {
        handleUser(user);
        navigate('/authenticated/:userID/snacks')
      }
    };
  };

  return (
    <section className="SigninSection">
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
    </section>
  );
};

export default Signin;
