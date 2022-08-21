import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOFour";
import Edit from "./Pages/Edit";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <section className="mainSection">
      <Navbar />
      {/* <main> */}
      <main className="mainSidebar">
        <Sidebar />
      </main>
      <section className="routeSections">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </section>
      {/* </main> */}
    </section>
  );
}

export default App;
