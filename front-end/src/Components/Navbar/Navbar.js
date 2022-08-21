import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import SnackImg from "../../images/snacksAttack.png";

export default function NavBar({ user, isAuthenticated }) {
  return (
    <nav>
      <Link to="/">
        <img src={SnackImg} alt="snacks attack" className="snackImg" />
      </Link>

      {isAuthenticated ? (
        <>
          <h1 className="navSnackLink">
            <Link to={`/authenticated/${user.id}/snacks`}>Your Snacks</Link>
          </h1>

          <h1>
            <Button variant="outline-light" className="newSnackButton">
              <Link
                to={`/authenticated/${user.id}/snacks/new`}
                className="navNewSnack"
              >
                New Snack
              </Link>
            </Button>
          </h1>
        </>
      ) : (
        <>
          <h1 className="navSnackLink">
            <Link to="/snacks">snacks</Link>
          </h1>

          <h1>
            <Button variant="outline-light" className="newSnackButton">
              <Link to="/snacks/new" className="navNewSnack">
                New Snack
              </Link>
            </Button>
          </h1>
        </>
      )}
    </nav>
  );
}
