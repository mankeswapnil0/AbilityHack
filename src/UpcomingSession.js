import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Cards from "./Cards";
import img2 from './images/img2.png';
import './UpcomingSession.css';

function UpcomingSession() {
    const [cards, setCards] = useState([
        {
            title: "Prateek Sharma | Pyschologist | How To Be Always Happy",
            content: "Anger, misery, hatred, negativity are instinctive however peace, love, happiness, positivity are conscious choices that we make to live well. Happiness is something you can decide ahead of time. Live in the moment. Focus on and appreciate what you have and be thankful for it. ",
            explore: "See More"
        },
        {
            title: "Dr. Vivek Bindra | Motivational Speaker | Belief System",
            content: "What is belief? A feeling of certainty, conviction, assurance, confidence, or rigidity? Why is it so difficult to change your old belief system and embrace a new one. He explains a strong concept with the help of interesting concepts and explains the significance of the belief system.",
            explore: "See More"
        },
        {
            title: "Robert Cialdini | Counselling Psychologist | Key To Success",
            content: "Robert Cialdini elaborates on the power of attention, and how being attentive can be the key to unlocking success. Through examples from his own life, he looks at how opportunities are always knocking on the door, if we are willing to look at life in a broader scope.",
            explore: "See More"
        },
        {
            title: "Sandeep Maheshwari | Motivational Speaker | Importance Of Life",
            content: "Sandeep Maheshwari is a name among millions who struggled, failed and surged ahead in search of success, happiness and contentment.  The ultimate purpose of life is peace because only a peaceful mind and heart can be full of love and compassion.",
            explore: "See More"
        },
        {
            title: "Andrew Meltzoff | Behavioral Therapist | Journey To Overcome Fears",
            content: "In this short clip taken from 'One: The movie' - a documentary about the meaning of life; Andrew talks about fear. Why do we feel fear and what is it's basis? Andrew explains the root cause of fear, the source of fear, and how to become free from fear.",
            explore: "See More"
        },
        {
            title: "Sonia Mishra | Health Counsellor | How To Get Rid Of Depression",
            content: "Just like any middle class guy, she too had a bunch of unclear dreams and a blurred vision of his goals in life. All she had was an undying learning attitude to hold on to. Rowing through ups and downs, it was time that taught him the true meaning of his life.",
            explore: "See More"
        }
    ])
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
