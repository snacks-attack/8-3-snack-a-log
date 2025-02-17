import "./Index.scss";
import axios from "axios";
import HeartHealth from "../HeartHealth";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";

const Snacks = () => {
  const API = process.env.REACT_APP_API_URL;

  const [snacks, setSnacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    axios.get(`${API}/snacks`).then((res) => {
      setSnacks(res.data.payload);
      setLoading(false);
    });
  }, []); // eslint-disable-line

  return (
    <section className="Snacks">
      {/* {smallScreen ? } */}
      <div className="Snack">
        {loading ? (
          <p>Loading...</p>
        ) : (
          snacks.map((snack) => (
            <article key={snack.id} className="articleCard">
              <div className="cardContainer">
                <h4>
                  <Link to={`/snacks/${snack.id}`}>
                    <img src={snack.image} alt={snack.name} />
                  </Link>
                  <div className="cardDetails">
                    {snack.name}
                    <span>
                      <h4>
                        <HeartHealth healthCheck={snack.is_healthy} />
                      </h4>
                    </span>
                  </div>
                  <Link to={`/snacks/${snack.id}/edit`}>
                    <Button variant="secondary">Edit</Button>
                  </Link>
                </h4>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default Snacks;
