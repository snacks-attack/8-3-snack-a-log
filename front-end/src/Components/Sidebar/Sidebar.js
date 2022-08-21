import "./Sidebar.scss";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section>
      <Navbar expand="lg" className="sidebarNavbar">
        <Navbar.Brand href="#menu" id="sidebarMenuName">
          Menu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="sidebarNavToggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Sidebar;
