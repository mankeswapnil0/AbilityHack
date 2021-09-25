import axios from './axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Cards from "./Cards";
import img2 from './images/img2.png';
import './UpcomingSession.css';

function UpcomingSession() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function fetchData() {
          const req = await axios.get("/card");
          setCards(req.data);
        }
        fetchData();
      }, []);

    return (
        <Router>
            <div className="upcomingSession">
                {cards.map((card) => (
                    <Link to={{ pathname: `/${card.title}` }} style={{ textDecoration: "none" }}>
                        <div className="card" onClick="window.location.reload();"><Cards image={img2} title={card.title} content={card.content} explore={card.explore} /></div>
                    </Link>
                ))}
            </div>
        </Router>
    )
}

export default UpcomingSession
