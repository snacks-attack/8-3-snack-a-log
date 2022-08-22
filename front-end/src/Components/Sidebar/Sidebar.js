import './Sidebar.scss';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({ user, isAuthenticated, handleLogout }) => {
  return (
    <section>
      <Navbar bg="dark" variant="dark" expand="lg" className="sidebarNavbar">
        <Navbar.Brand id="sidebarMenuName">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="sidebarNavToggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated ? (
              <>
                <h4>
                  Signed in as: <p id="sidebarUsername">{user.username}</p>
                </h4>
                <Button
                  variant="secondary"
                  id="sidebarLogoutButton"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Sidebar;
