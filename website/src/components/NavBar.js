import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="main-header">
      <h1 style={{ fontSize: 25 }}>Bridge The Gap</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/feed" exact>
              Home
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
          <NavLink to="/profile" exact>
            <Avatar
              alt="Profile"
              src="https://image.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg"
            />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
