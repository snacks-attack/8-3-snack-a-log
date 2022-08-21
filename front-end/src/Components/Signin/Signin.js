import "./Signin.scss";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = ({ setUser, setIsAuthenticated }) => {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {};
  const handleSubmit = async (e) => {};

  return (
    <section className="SigninSection">
      <h1>Signin</h1>
    </section>
  );
};

export default Signin;
