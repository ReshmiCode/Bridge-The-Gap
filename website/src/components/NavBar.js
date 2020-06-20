import React, { useState, useEffect } from "react";
import { NavLink , Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./NavBar.css";
let GLOBAL = require("../global");

const NavBar = () => {
    let [status, setStatus] = useState(GLOBAL.googleID.length>0);

    useEffect(() => {
        console.log(GLOBAL.googleID);
        setStatus(GLOBAL.googleID.length > 0);
    }, []);

    console.log("Logged in", status);

    const showingNavBar = () => {
        return(
            <header className="main-header">
                <nav>
                    <ul className="nav-links">
                        <NavLink to="/" exact style={{ textDecoration: "none" }}>
                        <h1 style={{ fontSize: 25, color: "#000000"  }}>Bridge The Gap</h1>
                        </NavLink>
                    </ul>
                </nav>
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
    }

    // return (
    //     <div>
    //         {status && showingNavBar()}
    //     </div>
    // );

    return (
        <div>
            {showingNavBar()}
        </div>
    );
};

export default NavBar;
