import React, { useState } from 'react';
import "./Session.css";
import EventNoteIcon from '@material-ui/icons/EventNote';
import Progressbar from './Progress_bar';
import { Button, Input } from '@material-ui/core';
import Chat from './Chat';
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
  

function Session({ video, title, content, amount }) {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

    return (
        <div className="session">
            <Modal
                open={open}
                onClose={() => setOpen(false)}
              >
                <div style={modalStyle} className={classes.paper}>
                  <form className="app_submit">
                    <Input
                      type="email"
                      placeholder="abc@gmail.com"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Contributor's Name: "
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      type="number"
                      placeholder="Amount: 0 $"
                      onChange={(e) => setName(e.target.value)}
                    /> 
                    <Button type="submit">Pay</Button>
                  </form>
                </div>
              </Modal>
            <div className="video">
                <video loop controls>
                    <source src={video} />
                </video>
            </div>
            <div className="video_content">
                <h1>{title}</h1>
                <p>{content}</p>
                <div className="calender">
                    <EventNoteIcon style={{ marginRight: "10px" }} />
                    <p>10 October 2021 at 10:00 AM - 11:00 AM</p>
                </div>
                <Chat />
            </div>
            <div className="fund_raising">
                <h1>Fund Raisings For NGO's:</h1>
                <p style={{ marginTop: "20px" }}>Fund Raise Goal: 100$</p>
                <Progressbar bgcolor="orange" progress={amount} height={30} />
            </div>
            <Button onClick={() => setOpen(true)} style={{ margin: "auto", marginBottom: "20px", fontWeight: "700", fontSize: "15px", width: "200px", color: "white", backgroundColor: "rgb(41, 194, 41)" }}>Contribute Now</Button>
        </div>
    )
}

export default Session
