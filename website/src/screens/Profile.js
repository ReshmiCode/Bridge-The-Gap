import React, { useState } from "react";
import { Avatar, IconButton, TextField, makeStyles } from "@material-ui/core";
import { Create, PhotoCamera } from "@material-ui/icons";
import ToggleButton from "@material-ui/lab/ToggleButton";
import "./Profile.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Profile() {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);
  const sampleBio =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.";

  return (
    <div className="App">
      <div className="profile-bar">
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div>
            <Avatar
              alt="Profile"
              src="https://image.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg"
              style={{ height: 160, width: 160 }}
            />
            <IconButton>
              <PhotoCamera />
            </IconButton>
          </div>
          <div style={{ width: 800 }}>
            <h2>Reshmi Ranjith</h2>
            {selected ? (
              <p style={{ fontSize: 20 }}>{sampleBio}</p>
            ) : (
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  multiline
                  rowsMax={4}
                  id="outlined-basic"
                  defaultValue={sampleBio}
                  variant="outlined"
                  labelWidth={60}
                />
              </form>
            )}
            <ToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
            >
              <Create />
            </ToggleButton>
          </div>
        </div>
        <div>
          <h2>Reset</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
