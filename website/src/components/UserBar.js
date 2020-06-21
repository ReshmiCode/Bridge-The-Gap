import React, { useState, useEffect } from "react";
import { Avatar, IconButton, TextField, Button } from "@material-ui/core";
import {
  Create,
  PhotoCamera,
  LinkedIn,
  Twitter,
  GitHub,
} from "@material-ui/icons";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ModalButton from "./Modal";
const axios = require("axios").default;
let GLOBAL = require("../global");

function UserBar(props) {
  const [selected, setSelected] = useState(false);
  let [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${props.user}`
      );
      setInfo(result.data.data[0]);
    }
    fetchData();
  }, []);


  return (
    <div className="profile-bar">
      <div style={{ flex: 1 }}>
        <Avatar
          alt="Profile"
          src={info.profilePic}
          style={{ height: 160, width: 160 }}
        />
      </div>
      <div style={{ flex: 2 }}>
        <h2>{info.userName}</h2>
        <p style={{ fontSize: 20 }}>{info.bio}</p>
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
    </div>
  );
}

export default UserBar;
