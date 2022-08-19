import "./Index.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import HeartHealth from '../HeartHealth';

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        await axios.get(`${API}/snacks`).then((res) => {
          setSnacks(res.data.payload);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchSnacks();
  }, []);

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
                    <h4>
                      <HeartHealth healthCheck={snack.is_healthy} />
                    </h4>
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
