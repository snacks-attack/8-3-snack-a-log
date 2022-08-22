import './Index.scss';
import axios from 'axios';
import HeartHealth from '../../HeartHealth';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Snacks = ({ user }) => {
  const API = process.env.REACT_APP_API_URL;

  const [userSnacks, setUserSnacks] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [smallScreen, setSmallScreen] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${API}/authenticated/${user.id}/snacks`)
      .then((res) => {
        setUserSnacks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // eslint-disable-line

  return (
    <section className="Snacks">
      {/* {smallScreen ? } */}
      <div className="Snack">
        {error ? 'No snacks found' : ''}
        {loading ? (
          <p>Loading...</p>
        ) : (
          userSnacks.map((snack) => (
            <article key={snack.id} className="articleCard">
              <div className="cardContainer">
                <h4>
                  <Link to={`/authenticated/${user.id}/snacks/${snack.id}`}>
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
                  <Link
                    to={`/authenticated/${user.id}/snacks/${snack.id}/edit`}
                  >
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
