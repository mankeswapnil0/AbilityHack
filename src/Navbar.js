import React from 'react';
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button, IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';
function Navbar() {

  return (
    <div className="navbar">

      <div className="navbar_left">
        <Link to='/' style={{ textDecoration: "none" }}>
          <Button >
            <img src="https://see.fontimg.com/api/renderfont4/dEqR/eyJyIjoiZnMiLCJoIjo2NCwidyI6MTI1MCwiZnMiOjUxLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzA3MDAwMCIsInQiOjF9/TWFyZ2RhcnNoYW4/lemon-jelly-personal-use.png" width="200" height="35" borderRadius="20px" alt=""/>
          </Button>
        </Link>
      </div>
      <div className="navbar_middle"></div>
      <div className="navbar_right">
        <IconButton>
          <SearchIcon style={{ fontSize: 30 }} />
        </IconButton>
        <Button>
          <strong>Sign In</strong>
        </Button>
        <Button>
          <strong>Sign Up</strong>
        </Button>

      </div>
    </div>
  );
}

export default Navbar;
