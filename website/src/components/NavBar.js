import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./NavBar.css";
const axios = require("axios").default;
let GLOBAL = require("../global");

const NavBar = () => {
  let [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${GLOBAL.googleID}`
      );
      setUser(result.data.data[0]);
    }
    fetchData();
  }, []);

  return (
    <header className="main-header">
      <nav>
        <ul className="nav-links">
          <NavLink
            to="/"
            exact
            style={{ textDecoration: "none", background: "transparent" }}
          >
            <h1 style={{ fontSize: 25, color: "#000000" }}>Bridge The Gap</h1>
          </NavLink>
        </ul>
      </nav>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/feed" exact>
              Feed
            </NavLink>
          </li>
          <li>
            <NavLink to="/opportunities" exact>
              Opportunities
            </NavLink>
          </li>
          <li>
            <NavLink to="/qna" exact>
              Q+A
            </NavLink>
          </li>
          <NavLink
            to="/profile"
            exact
            style={{ marginLeft: 20, background: "transparent" }}
          >
            <Avatar
              alt="Profile"
              src={user.profilePic}
            />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
