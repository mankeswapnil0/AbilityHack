import React, { useState } from "react";
import './App.css';
import Navbar from "./Navbar";
import About from "./About";
import UpcomingSession from "./UpcomingSession";
import img3 from './images/img3.jpeg'
import img4 from './images/img4.jpeg'
import { Button, Input, TextareaAutosize, TextField } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Session from "./Session";
import session1 from './sessionVideos/session1.mp4';
import session2 from './sessionVideos/session2.mp4';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');


  const [cards, setCards] = useState([
    {
      title: "Prateek Sharma | Pyschologist | How To Be Always Happy",
      content: "Anger, misery, hatred, negativity are instinctive however peace, love, happiness, positivity are conscious choices that we make to live well. Happiness is something you can decide ahead of time. The greatest asset we all have is the power of choice to decide how we feel. Forgive others, yourself, and what happened in the past. Create your own happiness. Surround yourself with the right people. Live in the moment. Focus on and appreciate what you have and be thankful for it. Feel the happiness!",
      explore: "See More",
      video: session1,
      amount: "86"
    },
    {
      title: "Dr. Vivek Bindra | Motivational Speaker | Belief System",
      content: "What is belief? A feeling of certainty, conviction, assurance, confidence, or rigidity? Why is it so difficult to change your old belief system and embrace a new one.Watch this amazing video in which Dr. Vivek Bindra talks about how to change a belief system and install a new belief. He explains a strong concept with the help of interesting concepts and explains the significance of the belief system. ",
      explore: "See More",
      video: session2,
      amount: "45"
    },
    {
      title: "Robert Cialdini | Counselling Psychologist | Key To Success",
      content: "Robert Cialdini elaborates on the power of attention, and how being attentive can be the key to unlocking success. Through examples from his own life, he looks at how opportunities are always knocking on the door, if we are willing to look at life in a broader scope.",
      explore: "See More",
      video: session1,
      amount: "30"
    },
    {
      title: "Sandeep Maheshwari | Motivational Speaker | Importance Of Life",
      content: "Sandeep Maheshwari is a name among millions who struggled, failed and surged ahead in search of success, happiness and contentment. Just like any middle class guy, he too had a bunch of unclear dreams and a blurred vision of his goals in life. The ultimate purpose of life is peace because only a peaceful mind and heart can be full of love and compassion.",
      explore: "See More",
      video: session1,
      amount: "78"
    },
    {
      title: "Andrew Meltzoff | Behavioral Therapist | Journey To Overcome Fears",
      content: "In this short clip taken from 'One: The movie' - a documentary about the meaning of life; Andrew talks about fear. Why do we feel fear and what is it's basis? Andrew explains the root cause of fear, the source of fear, and how to become free from fear.",
      explore: "See More",
      video: session1,
      amount: "20"
    },
    {
      title: "Sonia Mishra | Health Counsellor | How To Get Rid Of Depression",
      content: "Sonia Mishra is a name among millions who struggled, failed and surged ahead in search of success, happiness and contentment. Just like any middle class guy, she too had a bunch of unclear dreams and a blurred vision of his goals in life. All she had was an undying learning attitude to hold on to. Rowing through ups and downs, it was time that taught him the true meaning of his life.",
      explore: "See More",
      video: session1,
      amount: "98"
    }
  ])


  return (
    <Router>
      <Route exact path="/" render={() =>
        <div className="app">
          <div className="app_top">
            <Navbar />
            <About />
            <section id="sessions">
              <br />
              <div className="app_mid">
                <h1>Upcoming</h1>
                <h1>Sessions</h1>
              </div>
            </section>
            <UpcomingSession />
          </div>
          <div className="app_collab">
            <img src={img3} />
            <div className="app_collabText">
              <h1>Are you ready to contribute?<br />Apply to be a mentor</h1>
              <div className="btn">
                <Button style={{ backgroundColor: "rgb(41, 194, 41)" }} onClick={() => setOpen(true)}><strong>Join</strong></Button>
              </div>
              <Modal
                open={open}
                onClose={() => setOpen(false)}
              >
                <div style={modalStyle} className={classes.paper}>
                  <form className="app_submit">
                    <center>
                      <img src={img4} style={{ height: "60px" }, { width: "60px" }} />
                    </center>
                    <Input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      label="Why you want to join this ?"
                      onChange={(e) => setText(e.target.value)}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      } />
      {cards.map(card => (
        <Route exact path={`/${card.title}`} render={() =>
          <>
            <Navbar />
            <Session amount={card.amount} video={card.video} title={card.title} content={card.content} />
          </>
        } />
      ))}
    </Router>
  );
}

export default App;

