import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import UpcomingSession from "./UpcomingSession";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import { Button, Input, TextareaAutosize, TextField } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Session from "./Session";
import session1 from "./sessionVideos/session1.mp4";
import session2 from "./sessionVideos/session2.mp4";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import axios from "./axios";
import emailjs from "emailjs-com";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/card");
      setCards(req.data);
    }
    fetchData();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_hur8smx",
        e.target,
        "user_dLnU6gf0t2mKHfdLF0Rsd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setOpen(false)
    const btnClass = document.getElementsByClassName("btn")
    btnClass.appendChild.innerHTML("hi")
  };

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
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
                <h1>
                  Are you ready to contribute?
                  <br />
                  Apply to be a mentor
                </h1>
                <div className="btn">
                  <Button
                    style={{ backgroundColor: "rgb(41, 194, 41)" }}
                    onClick={() => setOpen(true)}
                  >
                    <strong>Join</strong>
                  </Button>
                </div>
                <Modal open={open} onClose={() => setOpen(false)}>
                  <div style={modalStyle} className={classes.paper}>
                    <center>
                      <img
                        src={img4}
                        style={({ height: "60px" }, { width: "60px" })}
                      />
                    </center>
                    <form onSubmit={sendEmail} className="app_submit">
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                      <TextField
                        id="standard-basic"
                        label="Why you want to join this ?"
                        name="message"
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        )}
      />
      {cards.map((card) => (
        <Route
          exact
          path={`/${card.title}`}
          render={() => (
            <>
              <Navbar />
              <Session
                amount={card.amount}
                video={session1}
                title={card.title}
                content={card.content}
              />
            </>
          )}
        />
      ))}
    </Router>
  );
}

export default App;
