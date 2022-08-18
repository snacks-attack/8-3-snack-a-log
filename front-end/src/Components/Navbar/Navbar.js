import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/">Go home</Link>
      </h1>
      <h1>
        <Link to="/snacks">snacks</Link>
      </h1>
      <Button variant="outline-primary">
        <Link to="/snacks/new">New Snack</Link>
      </Button>
    </nav>
  );
}
