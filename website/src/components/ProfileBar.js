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
const axios = require("axios").default;
let GLOBAL = require("../global");

function ProfileBar() {
  const [selected, setSelected] = useState(false);
  let [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${GLOBAL.googleID}`
      );
      setInfo(result.data.data[0]);
    }
    fetchData();
  }, []);

  const sampleBio =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.";

  return (
    <div className="profile-bar">
      <div style={{ flex: 1 }}>
        <Avatar
          alt="Profile"
          src={info.profilePic}
          style={{ height: 160, width: 160 }}
        />
        <IconButton>
          <PhotoCamera />
        </IconButton>
      </div>
      <div style={{ flex: 2 }}>
        <h2>{info.userName}</h2>
        {!selected ? (
          <p style={{ fontSize: 20 }}>{info.bio}</p>
        ) : (
          <React.Fragment>
            <TextField
              multiline
              rowsMax={4}
              id="outlined-basic"
              defaultValue={info.bio}
              variant="outlined"
              labelWidth={60}
              fullWidth
            />
            <Button>Add Component</Button>
          </React.Fragment>
        )}
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <Create fontSize="small" />
        </ToggleButton>
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

export default ProfileBar;
