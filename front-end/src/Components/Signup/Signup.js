import "./Signup.scss";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Signup = ({ handleUser }) => {
  const API = process.env.REACT_APP_API_URL;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
      email: email,
    };

    await axios
      .get(`${API}/users`)
      .then((res) => {
        const users = res.data.filter((user) => user.email === newUser.email);
        if (users.length > 0) {
          toast.error("Email already exists!", {
            position: "top-right",
            pauseOnFocusLoss: false,
            closeOnClick: true,
            pauseOnHover: false,
          });
        } else {
          axios
            .post(`${API}/users`, newUser)
            .then((res) => {
              notify(res.data);
            })
            .catch((err) => {
              setError(err);
            });
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  const notify = (newUser) => {
    toast.success(
      "User account has been created. You have automatially been signed in. \n You will be redirected in 3 seconds.",
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
      handleUser(newUser);
    }, 4100);
  };

  return (
    <section className="SignupSection">
      {error && <p className="error">{error}</p>}
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={username}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
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

export default Signup;
