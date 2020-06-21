import React, { useState } from "react";
import { Avatar, IconButton, TextField, Button } from "@material-ui/core";
import {
  Create,
  PhotoCamera,
  LinkedIn,
  Twitter,
  GitHub,
} from "@material-ui/icons";
import ToggleButton from "@material-ui/lab/ToggleButton";

function ProfileBar() {
  const [selected, setSelected] = useState(false);
  const sampleBio =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.";

  return (
    <div className="profile-bar">
      <div style={{ flex: 1 }}>
        <Avatar
          alt="Profile"
          src="https://image.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg"
          style={{ height: 160, width: 160 }}
        />
        <IconButton>
          <PhotoCamera />
        </IconButton>
      </div>
      <div style={{ flex: 2 }}>
        <h2>Reshmi Ranjith</h2>
        {!selected ? (
          <p style={{ fontSize: 20 }}>{sampleBio}</p>
        ) : (
          <TextField
            multiline
            rowsMax={4}
            id="outlined-basic"
            defaultValue={sampleBio}
            variant="outlined"
            labelWidth={60}
            fullWidth
          />
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
