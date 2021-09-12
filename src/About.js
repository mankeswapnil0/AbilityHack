import { Button } from '@material-ui/core';
import React from 'react';
import "./About.css";
import { Link } from "react-scroll";
function About() {
    return (
        <div className="about">
            <div className="about_content">
                <h1>An initiative</h1>
                <h1>to make world a better place</h1>
                <h1>for Everyone ...</h1>
                <div className="btn">
                    <Link to="sessions" smooth={true} duration="800">
                        <Button style={{marginLeft:"-25px", backgroundColor: "rgb(41, 194, 41)", color: "white" }} >
                            <strong>Get Started</strong>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="about_img">
                <img src={"https://thumbs.dreamstime.com/b/children-disability-awareness-day-support-happy-vector-disabled-kid-witting-wheelchair-healthy-toddler-standing-together-197363446.jpg" } />
            </div>

        </div>
    )
}

export default About
