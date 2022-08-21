import "./App.scss";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOFour";
import Edit from "./Pages/Edit";
import Navbar from "./Components/Navbar/Navbar";

import AuthIndex from "./Pages/Authenticated/Index";
import AuthShow from "./Pages/Authenticated/Show";
import AuthNew from "./Pages/Authenticated/New";
import AuthEdit from "./Pages/Authenticated/Edit";

import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleUser = (newUser) => {
    setUser(newUser);
    setIsAuthenticated(true);
    navigate(`/authenticated/${newUser.id}/snacks`);
  };

  const handleLogout = () => {
    setUser({});
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <section className="mainSection">
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      <main className="mainSidebar">
        <Sidebar
          user={user}
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
        />
      </main>
      <section className="routeSections">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route
            path="/signup"
            element={<Signup user={user} handleUser={handleUser} />}
          />
          <Route
            path="/signin"
            element={<Signin user={user} handleUser={handleUser} />}
          />
          <Route
            path="/authenticated/:userID/snacks"
            element={<AuthIndex user={user} />}
          />
          <Route
            path="/authenticated/:userID/snacks/new"
            element={<AuthNew user={user} />}
          />
          <Route
            path="/authenticated/:userID/snacks/:id"
            element={<AuthShow user={user} />}
          />
          <Route
            path="/authenticated/:userID/snacks/:id/edit"
            element={<AuthEdit user={user} />}
          />

          <Route path="*" element={<FourOFour />} />
        </Routes>
      </section>
    </section>
  );
}

export default App;
