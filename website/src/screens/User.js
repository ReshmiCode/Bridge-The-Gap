import React, { useEffect, useState } from "react";
import { Avatar, IconButton, TextField, Button } from "@material-ui/core";
import {
  Create,
  PhotoCamera,
  LinkedIn,
  Twitter,
  GitHub,
} from "@material-ui/icons";
import {
VerticalTimeline,
VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "../components/TimeLineCard";
import CardList from "../components/CardList";
import Timeline from "../components/Timeline";
import "./Profile.css";
import backdrop from "../assets/gorls.png";
import NavBar from "../components/NavBar";
const axios = require("axios").default;
let GLOBAL = require("../global");

export default function User({ match }) {
  const [user, setUser] = useState(null);
  const [userPic, setUserPic] = useState("");
  const [userName, setUserName] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userID, setUserID] = useState("");
  const [userPosts, setUserPosts] = useState("");

  useEffect(() => {
    const { id } = match.params;
    setUserID(id);
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${id}`
      );
      console.log("User", result.data.data[0].posts.reverse())
      setUser(result.data.data[0]);
      setUserPic(result.data.data[0].profilePic);
      setUserName(result.data.data[0].userName);
      setUserBio(result.data.data[0].bio);
      await setUserPosts(result.data.data[0].posts.reverse());
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="profile-bar">
      <div style={{ flex: 1 }}>
        <Avatar
          alt="Profile"
          src={userPic}
          style={{ height: 160, width: 160 }}
        />
      </div>
      <div style={{ flex: 2 }}>
        <h2>{userName}</h2>
        <p style={{ fontSize: 20 }}>{userBio}</p>
      </div>
      <div style={{ flex: 1 }}>
        <p>Find Me @:</p>
        <IconButton>
          <LinkedIn />
        </IconButton>
        <IconButton>
          <Twitter />
        </IconButton>
        <IconButton>
          <GitHub />
        </IconButton>
        <Button>Request Connection</Button>
      </div>
    </div><h3>Things I Can Help With:</h3>
      {user && <CardList cards={user.pushList} />}
      <h3>Things I Want Help With:</h3>
      {user && <CardList cards={user.pullList} />}
      <h3>My Journey:</h3>
      <Timeline user={GLOBAL.googleID}/>
      <img
        src={backdrop}
        alt="Women in  Tech"
        resizeMode={"cover"}
        style={{ width: "100%", paddingTop: 20 }}
        source={{ backdrop }}
      />
    </div>
  );
}
